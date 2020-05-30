using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using OnlineFruitVegShop.API.Data;
using OnlineFruitVegShop.API.Models;
using OnlineFruitVegShop.API.Repositories.Interfaces;

namespace OnlineFruitVegShop.API.Repositories.Implementations
{
    public class AuthRepository: GenericRepository<User>,IAuthRepository
    {
        

        public DataContext context
        {
            get { return _context as DataContext; }
        }

        public AuthRepository(DataContext context) : base(context)
        {
        }

        public async Task<User> Login(string username, string password)
        {
            var user = await _context.Users.FirstOrDefaultAsync( x => x.Username == username);
            if(user == null)
               return null;

            if(!VerifyPasswordHash(password , user.PasswordHash , user.PasswordSalt))
               return null;

               return user; 
        }

       

        public async Task<User> Register(User user, string password)
        {
            byte[] passwordHash , passwordsalt;

            CreatePasswordHash(password , out passwordHash , out passwordsalt);

            user.PasswordHash = passwordHash;
            user.PasswordSalt = passwordsalt;
            
            await _context.Users.AddAsync(user);
            //await _context.SaveChangesAsync();

            return user; 

        }


        public async Task<bool> UserExists(string username)
        {
           if (await _context.Users.AnyAsync( x => x.Username == username))
             return true;

             return false;
        }

        private void CreatePasswordHash(string password, out byte[] passwordHash, out byte[] passwordSalt)
        {
           using ( var hmac = new System.Security.Cryptography.HMACSHA512())
           {
               passwordSalt = hmac.Key;
               passwordHash = hmac.ComputeHash(System.Text.Encoding.UTF8.GetBytes(password));

           }
        }

        private bool VerifyPasswordHash(string password, byte[] passwordHash, byte[] passwordSalt)
        {
             using ( var hmac = new System.Security.Cryptography.HMACSHA512(passwordSalt))
           {
               
               var computedHash = hmac.ComputeHash(System.Text.Encoding.UTF8.GetBytes(password));

               for(int i = 0 ; i < computedHash.Length ; i++)
               {
                   if (computedHash[i] != passwordHash[i]) return false;
               }

           }

           return true;
        }

    }
}