using OnlineFruitVegShop.API.Data;
using OnlineFruitVegShop.API.Models;
using OnlineFruitVegShop.API.Repositories.Interfaces;

namespace OnlineFruitVegShop.API.Repositories.Implementations
{
    public class BillingAddressRepository: GenericRepository<BillingAddress>, IBillingAddressRepository
    {
         public DataContext context
        {
            get { return _context as DataContext; }
        }

        public BillingAddressRepository(DataContext context) : base(context)
        {
        }
    }
}