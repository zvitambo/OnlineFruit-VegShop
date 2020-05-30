using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace OnlineFruitVegShop.API.Models
{
    public class Order
    {
        [Key]
        public int OrderId { get; set; }
        public int CartId { get; set; }
        public decimal Amount { get; set; }
        public DateTime OrderDate { get; set; }

        public int BillingAddressId { get; set; }
       
    

        
    }
}