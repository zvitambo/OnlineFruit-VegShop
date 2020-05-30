using Microsoft.AspNetCore.Mvc;
using System;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;
using OnlineFruitVegShop.API.Data;
using OnlineFruitVegShop.API.Dtos;
using OnlineFruitVegShop.API.Models;
using OnlineFruitVegShop.API.Repositories.Interfaces;
using Microsoft.Extensions.Configuration;
using Microsoft.IdentityModel.Tokens;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Hosting;
using System.IO;

namespace OnlineFruitVegShop.API.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class ProductController: ControllerBase
    {

        private readonly IUnitOfWork _repo;
        private readonly IConfiguration _config;

          private readonly IWebHostEnvironment _environment;
        public ProductController(IUnitOfWork repo, IConfiguration config, IWebHostEnvironment environment)
        {
            _config = config;
            _repo = repo;
            _environment = environment;

        }

       [HttpGet("GetProducts")]        
        public async Task<IActionResult> GetProducts()
        {
            var Products = await _repo.ProductRepository.GetAll();
           
            
            return Ok(Products);

        }

         [HttpGet("GetProduct/{id}")]
        public async Task<IActionResult> GetProduct(int id)
        {
            var Product = await _repo.ProductRepository.Find(x => x.Id == id);
            
            
            return Ok(Product);

        }

        [HttpPost("UploadfFile")]
        public async Task<IActionResult> UploadfFile(IFormCollection formdata)
        {

           
            try
                {                    
                  {              


                       // temporary measure:  consider using service like Amazon S3,cloudinary or firebase in future 
                        var UploadFolder = _config.GetSection("AppSettings:UploadPath").Value;  

                        var files = HttpContext.Request.Form.Files;
                        var url = "";

                      
                        foreach (var file in files)
                        {
                            string guid = Guid.NewGuid().ToString();

                            string ext = System.IO.Path.GetExtension(file.Name);
                            var path = Path.Combine(_environment.ContentRootPath, UploadFolder, guid + ext);
                            url = Path.Combine(UploadFolder, guid + ext);
                            var ms = new MemoryStream();
                            await file.CopyToAsync(ms);
                            using (FileStream myFile = new FileStream(path, FileMode.Create, FileAccess.Write))
                            {
                                ms.WriteTo(myFile);
                            }

                          
                        }                        
                        return StatusCode(201, url); 
                  } 

                }          
               
                catch (Exception ex)
                {
                   return StatusCode(500, ex); 
                }               
          
        }


        [HttpPost("SaveProduct")]
        public async Task<IActionResult> SaveProduct([FromBody] ProductDto productDto)
        {

            
            try
                {                    
                    var product = new Product
                    {
                        
                        Id = productDto.ProductId,
                        Name = productDto.Name,
                        Description = productDto.Description,
                        Price = Convert.ToInt32(productDto.Price),
                        PhotoUrl = productDto.PhotoUrl                       
                        
                    };                  
                        await _repo.ProductRepository.Add(product);
                        
                        await _repo.Complete();

                        return StatusCode(201, product); 
                   
                }
                catch (Exception ex)
                {
                   return StatusCode(500, ex); 
                }               
          
        }
   }

}