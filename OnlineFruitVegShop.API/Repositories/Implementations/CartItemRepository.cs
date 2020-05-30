using System.Collections.Generic;
using System.Threading.Tasks;
using OnlineFruitVegShop.API.Data;
using OnlineFruitVegShop.API.Models;
using OnlineFruitVegShop.API.Repositories.Interfaces;
using System.Linq;
using System.Data;
using Microsoft.EntityFrameworkCore;

namespace OnlineFruitVegShop.API.Repositories.Implementations
{
    public class CartItemRepository: GenericRepository<CartItem>,ICartItemRepository
    {
         public DataContext context
        {
            get { return _context as DataContext; }
        }

        public CartItemRepository(DataContext context) : base(context)
        {
        }

        public async Task<List<CartItem>> GetCheckedOutCartItems(bool checkedOut)
        {

            var cartItems = await _context.CartItems.Where(x => x.CheckedOut == checkedOut).ToListAsync();
        

            return cartItems;
           
        }

        public async Task<List<CartItem>> GetCartItemProducts(int cartId)
        {
            var cartItems = await _context.CartItems.Where(x => x.CartId == cartId && x.CheckedOut == false)
                                 .Include( x => x.Product)
                                 .ToListAsync();
        

            return cartItems;
        }

        public async Task<List<CartItem>> GetOrderCartItemProducts(int cartId)
        {
            var cartItems = await _context.CartItems.Where(x => x.CartId == cartId && x.CheckedOut == false)
                                 .Include( x => x.Product)
                                 .ToListAsync();
        

            return cartItems;
        }

        public void RemoveProductfromCartItems(int productId)
        {
          var cartItem =  _context.CartItems.Where(x => x.ProductId == productId).ToList();

          _context.RemoveRange(cartItem);
        }

        public async Task<CartItem> GetCartItemByProductId(int ProductId)
        {
             return await _context.CartItems.Where(x => x.ProductId == ProductId).FirstOrDefaultAsync();
        }
    }
}