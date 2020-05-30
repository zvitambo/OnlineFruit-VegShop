using System.ComponentModel.DataAnnotations;

namespace OnlineFruitVegShop.API.Models
{
    public class CartItem
    {
        [Key]
        public int Id { get; set; }

        public int ProductId { get; set; }

        public decimal Total { get; set; }
        public int Quantity { get; set; }
        public int CartId { get; set; }
        public bool CheckedOut { get; set; }     

       

        public Product Product { get; set; }
       


    }
}