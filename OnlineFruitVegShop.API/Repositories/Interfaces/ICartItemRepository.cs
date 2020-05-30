using System.Collections.Generic;
using System.Threading.Tasks;
using OnlineFruitVegShop.API.Models;

namespace OnlineFruitVegShop.API.Repositories.Interfaces
{
    public interface ICartItemRepository : IGenericRepository<CartItem>
    {
          Task<List<CartItem>> GetCheckedOutCartItems(bool checkedOut);
          Task<List<CartItem>> GetCartItemProducts(int cartId);
          Task <CartItem> GetCartItemByProductId(int ProductId);

          Task<List<CartItem>>GetOrderCartItemProducts(int cartId);

           void RemoveProductfromCartItems (int ProductId);
        

    }
}