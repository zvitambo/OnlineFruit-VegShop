using Microsoft.EntityFrameworkCore;
using OnlineFruitVegShop.API.Models;

namespace OnlineFruitVegShop.API.Data
{
    public class DataContext : DbContext
    {
        

        public DbSet<User> Users { get; set; }

        public DbSet<Product> Products { get; set; }

        public DbSet<Cart> Carts { get; set; }

        public DbSet<Order> Orders { get; set; }

        public DbSet<CartItem> CartItems { get; set; }

        public DbSet<BillingAddress> BillingAddresses { get; set; }



        public DataContext(DbContextOptions<DataContext> options)
            : base(options)
        {
        }
        
    }
}