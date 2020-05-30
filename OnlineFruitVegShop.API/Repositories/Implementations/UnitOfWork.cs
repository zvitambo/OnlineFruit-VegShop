using System.Threading.Tasks;
using OnlineFruitVegShop.API.Data;
using OnlineFruitVegShop.API.Repositories.Interfaces;

namespace OnlineFruitVegShop.API.Repositories.Implementations
{
   public class UnitOfWork : IUnitOfWork
    {
        private readonly DataContext _context;
        


        public UnitOfWork(DataContext context)
        {
            _context = context;
           
            AuthRepository = new AuthRepository(context);
            OrderRepository = new OrderRepository(context);
            ProductRepository = new ProductRepository (context);
            CartItemRepository = new CartItemRepository(context);
            BillingAddressRepository = new BillingAddressRepository(context);
            CartRepository = new CartRepository(context);
            


        }

        public IAuthRepository AuthRepository { get; private set; }
        public IOrderRepository OrderRepository { get; private set; }
        public IProductRepository ProductRepository { get; private set; }
        public ICartItemRepository CartItemRepository { get; private set; }
        public IBillingAddressRepository BillingAddressRepository { get; private set; }

          public ICartRepository CartRepository { get; private set; }
        

       

        public async Task Complete()
        {
           await _context.SaveChangesAsync();
        }

        public void Dispose()
        {
            _context.Dispose();
        }
    }
}