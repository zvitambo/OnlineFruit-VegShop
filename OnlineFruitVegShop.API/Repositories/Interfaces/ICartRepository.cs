using System.Collections.Generic;
using System.Threading.Tasks;
using OnlineFruitVegShop.API.Models;

namespace OnlineFruitVegShop.API.Repositories.Interfaces
{
    public interface ICartRepository: IGenericRepository<Cart>
    {
          Task<int> GetCartId(int userId);

          Task<List<Cart>> GetAllCarts();
         
    }
}