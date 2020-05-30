using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using AutoMapper;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.HttpsPolicy;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.FileProviders;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Logging;
using Microsoft.IdentityModel.Tokens;
using OnlineFruitVegShop.API.Data;
using OnlineFruitVegShop.API.Repositories.Implementations;
using OnlineFruitVegShop.API.Repositories.Interfaces;
using Pomelo.EntityFrameworkCore.MySql.Infrastructure;
using Pomelo.EntityFrameworkCore.MySql.Storage;
using Microsoft.AspNetCore.Mvc;

namespace OnlineFruitVegShop.API
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {

            //services.AddDbContext<DataContext>(options =>
            //   options.UseMySql(
            //       Configuration.GetConnectionString("DefaultConnection")));

            services.AddScoped<DbContext, DataContext>();
            services.AddScoped<IAuthRepository, AuthRepository>();  
            services.AddScoped<IProductRepository, ProductRepository>();
            services.AddScoped<IOrderRepository, OrderRepository>();
            services.AddScoped<ICartItemRepository, CartItemRepository>();    
            services.AddScoped<IBillingAddressRepository, BillingAddressRepository>(); 
             services.AddScoped<ICartRepository, CartRepository>();      
            services.AddScoped<IGenericRepository<Object>, GenericRepository<Object>>();
            services.AddScoped<IUnitOfWork, UnitOfWork>();
            services.AddControllersWithViews();
            services.AddControllers().AddNewtonsoftJson(options =>
                     options.SerializerSettings.ReferenceLoopHandling = Newtonsoft.Json.ReferenceLoopHandling.Ignore
                 );


            services.AddAuthentication(JwtBearerDefaults.AuthenticationScheme)
            .AddJwtBearer(options => {
               options.TokenValidationParameters = new  TokenValidationParameters
               {
                   ValidateIssuerSigningKey = true,
                   IssuerSigningKey = new SymmetricSecurityKey(Encoding.ASCII.
                   GetBytes(Configuration.GetSection("AppSettings:Token").Value)),
                   ValidateIssuer = false,
                   ValidateAudience = false
               };
            });



            
            services.AddDbContext<DataContext>(options =>
               options.UseMySql(Configuration.GetConnectionString("DefaultConnection"),
                    mysqlOptions =>
                        mysqlOptions.ServerVersion(new ServerVersion(new Version(10, 4, 6), ServerType.MariaDb))));
            services.AddControllers();
            services.AddCors();
            services.AddAutoMapper(typeof(Startup));
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }

            

            app.UseHttpsRedirection();

            app.UseRouting();

            app.UseAuthorization();

             app.UseCors(x => x.AllowAnyOrigin().AllowAnyMethod().AllowAnyHeader());
             app.UseDefaultFiles();
              app.UseStaticFiles();

            //   app.UseMvc(routes => {routes.MapSpaFallBackRoute(
            //       name: "spa-fallback",
            //       defaults: new {Controller: "Fallback", Action: "Index" }
            //   )});
           
            // app.UseStaticFiles(new StaticFileOptions() { 
            //    FileProvider = new PhysicalFileProvider(
            //        Path.Combine(Directory.GetCurrentDirectory(),@"Uploads")),
            //    RequestPath = new PathString("/Uploads")
            // });

            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllers();
            });
        }
    }
}
