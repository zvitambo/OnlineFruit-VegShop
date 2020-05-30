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

namespace OnlineFruitVegShop.API.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class CartitemController : ControllerBase
    {

        private readonly IUnitOfWork _repo;
        private readonly IConfiguration _config;
        public CartitemController(IUnitOfWork repo, IConfiguration config)
        {
            _config = config;
            _repo = repo;

        }


        [HttpGet]
        public async Task<IActionResult> GetCartItems()
        {
            var GetCartItems = await _repo.CartItemRepository.GetAll();
           
            return Ok(GetCartItems);

        }

        [HttpGet("GetCheckedOutCartItems/{id}")]
        public async Task<IActionResult> GetCheckedOutCartItems(bool checkedOut)
        {
            var GetCartItems = await _repo.CartItemRepository.GetCheckedOutCartItems(checkedOut);
           
            return Ok(GetCartItems);

        }      



        [HttpGet("GetCartItems/{id}")]
        public async Task<IActionResult> GetCartItems(int id)
        {
            var GetCartItems = await _repo.CartItemRepository.GetCartItemProducts(id);
            
            return Ok(GetCartItems);
        }

        [HttpGet("GetOrderCartItemProducts/{id}")]
        public async Task<IActionResult> GetOrderCartItemProducts(int id)
        {
            var GetCartItems = await _repo.CartItemRepository.GetOrderCartItemProducts(id);

            
            return Ok(GetCartItems);
        }

       
     [HttpPost("SaveCartItem")]
        public async Task<IActionResult> SaveCartItem(CartItemDto cartItemDto)
        {

           
            try
                {        
                var cartItem = await _repo.CartItemRepository.GetCartItemByProductId(cartItemDto.ProductId);
                     if (cartItem != null)
                     {
                         var product = await _repo.ProductRepository.Get(cartItemDto.ProductId);
                        cartItem.Quantity ++;
                        cartItem.Total = cartItem.Quantity * product.Price;                        
                     } 
                     else                      
                     {
                        cartItem = new CartItem
                            {
                                
                                Id = cartItemDto.Id,
                                CartId = Convert.ToInt32(cartItemDto.CartId),
                                ProductId = cartItemDto.ProductId,
                                Quantity = cartItemDto.Quantity,
                                Total =cartItemDto.Total,
                                CheckedOut = cartItemDto.CheckedOut,
                            };   
                            await _repo.CartItemRepository.Add(cartItem);    
                     }            
                                
                        
                        
                        await _repo.Complete();

                        return StatusCode(201, cartItem); 
                   
                }
                catch (Exception ex)
                {
                   return StatusCode(500, ex); 
                }               
          
        }


        [HttpPost("RemoveCartItem")]
        public async Task<IActionResult> RemoveCartItem(Product product)
        {

           
            try
                {                    
                                   
                         _repo.CartItemRepository.RemoveProductfromCartItems(product.Id);
                        
                        await _repo.Complete();

                        return StatusCode(201); 
                   
                }
                catch (Exception ex)
                {
                   return StatusCode(500, ex); 
                }               
          
        }
   }
       

}
