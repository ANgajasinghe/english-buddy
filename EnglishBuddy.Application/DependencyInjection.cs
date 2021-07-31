using System;
using EnglishBuddy.Application.Persistence;
using EnglishBuddy.Application.Services;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;

namespace EnglishBuddy.Application
{
    public static class DependencyInjection
    {
        public static IServiceCollection AddApplication(this IServiceCollection services, IConfiguration configuration)
        {
            var connectionString = configuration.GetConnectionString("AppConnection");

            services.AddDbContext<AppDbContext>(dbContextBuilder =>
            {
                dbContextBuilder.UseSqlServer(connectionString, o =>
                {
                    o.EnableRetryOnFailure(
                        10,
                        TimeSpan.FromSeconds(10),
                        null
                    );
                    o.UseQuerySplittingBehavior(QuerySplittingBehavior.SplitQuery);
                    o.MigrationsAssembly("EnglishBuddy");
                });
                dbContextBuilder.UseQueryTrackingBehavior(QueryTrackingBehavior.NoTracking);
            });


            services.AddScoped<JwtTokenService>();
            services.AddScoped<UserRecommendations>();

            return services;
        }
    }
}