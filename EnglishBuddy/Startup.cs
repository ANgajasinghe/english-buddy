using System.Text.Json.Serialization;
using EnglishBuddy.Application;
using EnglishBuddy.Hubs;
using EnglishBuddy.Services;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.HttpOverrides;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.OpenApi.Models;

namespace EnglishBuddy
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        private IConfiguration Configuration { get; }

        public void ConfigureServices(IServiceCollection services)
        {
            services.AddApplication(Configuration);
            services.AddControllers()
                .AddNewtonsoftJson(options =>
                options.SerializerSettings.ReferenceLoopHandling = Newtonsoft.Json.ReferenceLoopHandling.Ignore
            );
            services.AddSpaStaticFiles(configuration => { configuration.RootPath = "ClientApp/build"; });
            services.AddSwaggerGen(c =>
            {
                c.SwaggerDoc("v1", new OpenApiInfo { Title = "EnglishBuddy", Version = "v1" });
            });
            services.Configure<ForwardedHeadersOptions>(options =>
           {
               options.ForwardedHeaders =
                   ForwardedHeaders.XForwardedFor | ForwardedHeaders.XForwardedProto;
           });
            services.AddHttpContextAccessor();
            services.AddSignalR();
            services.AddSingleton<CurrentUserService>();
            services.AddSingleton<SentimentAnalysisConsumeModel>();
              services.AddCors(options =>
              {
                   options.AddPolicy("Open", builder => builder.AllowAnyOrigin().AllowAnyHeader().AllowAnyMethod());
              });

        }

        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            app.Use((context, next) =>
            {
                context.Request.Scheme = "https";
                return next();
            });
            app.UseExceptionHandler("/Error");
            app.UseForwardedHeaders();
            app.UseHsts();
            app.UseDeveloperExceptionPage();
            app.UseSwagger();
            app.UseSwaggerUI(c => { c.SwaggerEndpoint("/swagger/v1/swagger.json", "EnglishBuddy v1"); });
            app.UseHttpsRedirection();
            app.UseStaticFiles();
            app.UseSpaStaticFiles();
            app.UseRouting();
            app.UseAuthorization();
            
            app.UseCors("Open");
            
            app.UseEndpoints(endpoints =>
            {
                endpoints.MapHub<CommentNotification>("/CommentNotification");
                endpoints.MapControllers();
            });
            app.UseSpa(spa =>
            {
                spa.Options.SourcePath = "ClientApp";
                if (env.IsDevelopment())
                    spa.UseProxyToSpaDevelopmentServer(Configuration["SpaBaseUrl"] ?? "http://localhost:3000");
            });
        }
    }
}