using System.Collections.Generic;
using OnlineFruitVegShop.API.Models;

namespace OnlineFruitVegShop.API.Dtos
{
    public class OrderCartItemDto
    {
          public int Id { get; set; }

        public int ProductId { get; set; }

        public int Total { get; set; }
        public int Quantity { get; set; }
        public string CartId { get; set; }
        public bool CheckedOut { get; set; }       
        public int OrderId { get; set; }
         public Product Product { get; set; }    

      
    }
}