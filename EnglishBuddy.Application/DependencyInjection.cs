using System;
using EnglishBuddy.Application.Persistence;
using EnglishBuddy.Application.Services;
using Hangfire;
using Hangfire.PostgreSql;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using BackgroundJob = Hangfire.BackgroundJob;

namespace EnglishBuddy.Application
{
    public static class DependencyInjection
    {
        public static IServiceCollection AddApplication(this IServiceCollection services, IConfiguration configuration)
        {
            var connectionString = configuration.GetConnectionString("AppConnection");

            services.AddDbContext<AppDbContext>(dbContextBuilder =>
            {
                dbContextBuilder.UseNpgsql(connectionString, o =>
                {
                    o.EnableRetryOnFailure(
                        10,
                        TimeSpan.FromSeconds(10),
                        null
                    );
                    o.UseQuerySplittingBehavior(QuerySplittingBehavior.SplitQuery);
                    o.MigrationsAssembly("EnglishBuddy");
                });
                
                // dbContextBuilder.UseSqlServer(connectionString, o =>
                // {
                //     o.EnableRetryOnFailure(
                //         10,
                //         TimeSpan.FromSeconds(10),
                //         null
                //     );
                //     o.UseQuerySplittingBehavior(QuerySplittingBehavior.SplitQuery);
                //     o.MigrationsAssembly("EnglishBuddy");
                // });
                dbContextBuilder.UseQueryTrackingBehavior(QueryTrackingBehavior.NoTracking);
            });

            services.AddHangFireService(connectionString);

            services.AddScoped<EBBackgroundJob>();
            services.AddScoped<JwtTokenService>();
            services.AddScoped<UserRecommendations>();

            return services;
        }
        
        public static IServiceCollection AddHangFireService(this IServiceCollection services, string connectionString)
        {
            services.AddHangfire(config => config
                .SetDataCompatibilityLevel(CompatibilityLevel.Version_170)
                .UseSimpleAssemblyNameTypeSerializer()
                .UseRecommendedSerializerSettings()
                .UsePostgreSqlStorage(connectionString, new PostgreSqlStorageOptions
                {

                    QueuePollInterval = TimeSpan.FromSeconds(15),
                    JobExpirationCheckInterval = TimeSpan.FromHours(1),
                }));

            services.AddHangfireServer();
            JobStorage.Current = new PostgreSqlStorage(connectionString);
            return services;
        }
    }
}