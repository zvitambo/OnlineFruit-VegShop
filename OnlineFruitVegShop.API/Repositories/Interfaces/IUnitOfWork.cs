using System;
using System.Threading.Tasks;
using OnlineFruitVegShop.API.Repositories.Implementations;

namespace OnlineFruitVegShop.API.Repositories.Interfaces
{
    public interface IUnitOfWork: IDisposable
    {
        IAuthRepository AuthRepository { get; }
        IOrderRepository OrderRepository { get; }
        IProductRepository ProductRepository { get; }

        ICartItemRepository CartItemRepository { get; }

        IBillingAddressRepository BillingAddressRepository { get; }

        ICartRepository CartRepository { get; }
        

        Task Complete();
    }
}