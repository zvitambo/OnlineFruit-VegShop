using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using OnlineFruitVegShop.API.Data;
using OnlineFruitVegShop.API.Models;
using OnlineFruitVegShop.API.Repositories.Interfaces;
using System.Data;


namespace OnlineFruitVegShop.API.Repositories.Implementations
{
    public class CartRepository : GenericRepository<Cart>, ICartRepository
    {
         public DataContext context
        {
            get { return _context as DataContext; }
        }

        public CartRepository(DataContext context) : base(context)
        {
        }

        public async Task<int> GetCartId(int userId)
        {
           var cart = await _context.Carts.Where(x => x.UserId == userId).FirstOrDefaultAsync();

           if (cart != null)
           {
               return cart.Id;
           }

                return 0;
        }

        public async  Task<List<Cart>> GetAllCarts()
        {
           var carts = await _context.Carts.Include( x => x.User).ToListAsync();
        

            return carts;
        }

        
    }
}