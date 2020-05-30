using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using OnlineFruitVegShop.API.Data;
using OnlineFruitVegShop.API.Models;
using OnlineFruitVegShop.API.Repositories.Interfaces;

namespace OnlineFruitVegShop.API.Repositories.Implementations
{
    public class OrderRepository: GenericRepository<Order>, IOrderRepository
    {
         public DataContext context
        {
            get { return _context as DataContext; }
        }

        public OrderRepository(DataContext context) : base(context)
        {
        }

        public async Task<List<Order>> GetAllOrders()
        {
            var orders = await _context.Orders.ToListAsync();
        

            return orders;
        }

        public async Task<List<Order>> GetMyOrders(int cartId)
        {
           var orders = await _context.Orders.Where(x => x.CartId == cartId )
                                             .ToListAsync();                                                        
                                 
        

            return orders;
        }
    }
}