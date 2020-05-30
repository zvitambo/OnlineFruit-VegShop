using System.Threading.Tasks;
using OnlineFruitVegShop.API.Models;

namespace OnlineFruitVegShop.API.Repositories.Interfaces
{
    public interface IAuthRepository : IGenericRepository<User>
    {
         Task<User> Register(User user, string password);
         Task<User> Login(string username ,string password);
         Task<bool> UserExists(string username);
    }
}