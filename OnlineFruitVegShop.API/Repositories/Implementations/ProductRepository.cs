using OnlineFruitVegShop.API.Data;
using OnlineFruitVegShop.API.Models;
using OnlineFruitVegShop.API.Repositories.Interfaces;

namespace OnlineFruitVegShop.API.Repositories.Implementations
{
    public class ProductRepository: GenericRepository<Product>,IProductRepository
    {
         public DataContext context
        {
            get { return _context as DataContext; }
        }

        public ProductRepository(DataContext context) : base(context)
        {
        }
    }
}