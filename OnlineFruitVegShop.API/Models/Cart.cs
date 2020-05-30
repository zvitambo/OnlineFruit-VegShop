using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace OnlineFruitVegShop.API.Models
{
    public class Cart
    {


[Key]
         public int Id { get; set; }
       

        public User User { get; set; }

        public int UserId { get; set; }
    }
}
