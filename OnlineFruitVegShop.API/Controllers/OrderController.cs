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
    public class OrderController: ControllerBase
    {

        private readonly IUnitOfWork _repo;
        private readonly IConfiguration _config;
        public OrderController(IUnitOfWork repo, IConfiguration config)
        {
            _config = config;
            _repo = repo;

        }

        [HttpGet("GetOrders")]
        public async Task<IActionResult> GetOrders()
        {
            var Orders = await _repo.OrderRepository.GetAllOrders();         
            
            return Ok(Orders);

        }

        [HttpGet("GetMyOrders/{id}")]
        public async Task<IActionResult> GetMyOrders(string id)
        {
            var Orders = await _repo.OrderRepository.GetMyOrders(Convert.ToInt32(id));
            
            
            return Ok(Orders);

        }


        [HttpPost("SaveOrder")]
        public async Task<IActionResult> SaveOrder(OrderDto orderDto)
        {

            if (orderDto == null)
                return BadRequest("Invalid Order");

            try
                {

                    var cartItemList = new List<CartItem>();

                     //will update with autoMapper 
                    foreach (var item in orderDto.OrderCartItemDtos)
                        {

                          var cartItem = await _repo.CartItemRepository.Get(item.Id);

                            if (cartItem != null)
                            {
                               cartItem.ProductId = item.ProductId;
                               cartItem.Total =  item.Total;
                               cartItem.Quantity = item.Quantity;
                               cartItem.CartId = orderDto.CartId;
                               cartItem.CheckedOut = true;
                               await  _repo.CartItemRepository.Add(cartItem);
                            }
                                
                               
                        }



                // BillingAddress billingAddress = new BillingAddress()
                // {
                //     Id = 0,
                //     Firstname = orderDto.BillingAddressDto.Firstname,
                //     Lastname = orderDto.BillingAddressDto.Lastname,
                //     EmailAddress = orderDto.BillingAddressDto.EmailAddress,
                //     Address = orderDto.BillingAddressDto.Address,
                //     Address2 = orderDto.BillingAddressDto.Address2,
                //     Country = orderDto.BillingAddressDto.Country,
                //     State = orderDto.BillingAddressDto.State,
                //     Zip = orderDto.BillingAddressDto.Zip

                // };
                
                //     await _repo.BillingAddressRepository.Add(billingAddress);


                     var order = new Order
                    {
                        CartId = orderDto.CartId,
                        Amount = orderDto.totalAmount,
                        OrderDate = DateTime.Now,
                        BillingAddressId = 1 //billingAddress.Id
                       
                        
                      };
                         
                        await _repo.OrderRepository.Add(order);
                    
                        await _repo.Complete();

                        return StatusCode(201); 

                   
                }
                catch (Exception ex)
                {
                   return StatusCode(500,ex); 
                }               
          
        }

       
    }
}