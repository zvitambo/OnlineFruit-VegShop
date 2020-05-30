using System.Collections.Generic;
using System.Threading.Tasks;
using OnlineFruitVegShop.API.Models;
using OnlineFruitVegShop.API.Repositories.Implementations;

namespace OnlineFruitVegShop.API.Repositories.Interfaces
{
    public interface IOrderRepository : IGenericRepository<Order>
    {
       Task<List<Order>> GetAllOrders();

       Task<List<Order>> GetMyOrders(int cartId);
    }
}