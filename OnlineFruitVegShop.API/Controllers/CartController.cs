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
using System.Collections.Generic;

namespace OnlineFruitVegShop.API.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class CartController: ControllerBase
    {

        private readonly IUnitOfWork _repo;
        private readonly IConfiguration _config;
        public CartController(IUnitOfWork repo, IConfiguration config)
        {
            _config = config;
            _repo = repo;

        }

         [HttpGet("GetCarts")]
        public async Task<IActionResult> GetCarts()
        {
            var Carts = await _repo.CartRepository.GetAllCarts();
            
            var cartList = new List<CartDto>();

            foreach(var cart in Carts)
            {
                var newcart = new CartDto
                {
                   Id = cart.Id,
                   Username = cart.User.Username
                };

                cartList.Add(newcart);
            }

            

             return Ok(cartList);


        }


       


        
    }
}