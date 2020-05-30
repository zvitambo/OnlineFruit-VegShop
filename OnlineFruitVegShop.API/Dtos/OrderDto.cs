using System;
using System.Collections.Generic;

namespace OnlineFruitVegShop.API.Dtos
{
    public class OrderDto
    {
         public int Id { get; set; }
        public int CartId { get; set; } 
        
        public decimal totalAmount { get; set; }       

        public DateTime? Date { get; set; }

         public BillingAddressDto BillingAddressDto { get; set; }

        public ICollection<OrderCartItemDto> OrderCartItemDtos { get; set; }

       

        public OrderDto()
        {
            OrderCartItemDtos = new List<OrderCartItemDto>();
        }
    }
}