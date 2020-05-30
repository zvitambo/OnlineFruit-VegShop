using Microsoft.AspNetCore.Mvc;
using System;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;
using OnlineFruitVegShop.API.Data;
using OnlineFruitVegShop.API.Dtos;
using OnlineFruitVegShop.API.Models;
using OnlineFruitVegShop.API.Repositories.Interfaces;
using Microsoft.Extensions.Configuration;
using Microsoft.IdentityModel.Tokens;

namespace OnlineFruitVegShop.API.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class AuthController: ControllerBase
    {

        private readonly IUnitOfWork _repo;
        private readonly IConfiguration _config;
        public AuthController(IUnitOfWork repo, IConfiguration config)
        {
            _config = config;
            _repo = repo;

        }

[HttpPost("register")]
        public async Task<IActionResult> Register(UserRegistrationDto userRegistrationDto)
        {
            var username = userRegistrationDto.Username.ToLower();

            if (await _repo.AuthRepository.UserExists(username))
                return BadRequest("Username already exists");

            var userToCreate = new User
            {
                Username = username
            };

            var createdUser = await _repo.AuthRepository.Register(userToCreate, userRegistrationDto.Password);
                if ( createdUser != null){
                    await _repo.Complete();
                    return StatusCode(201);

                }
            
                             
              return StatusCode(500);
            
            
        }

        [HttpPost("login")]
        public async Task<IActionResult> Login(UserForLoginDto userForLoginDto)
        {
            var userFromRepo = await _repo.AuthRepository.Login(userForLoginDto.Username.ToLower(), userForLoginDto.Password);

            if (userFromRepo == null)            
                  return Unauthorized();
           
            

            string role = "";

            if (userFromRepo.Username.ToLower() == "admin")
            {
                role = "admin";
            }

            int cartId = await _repo.CartRepository.GetCartId(userFromRepo.Id);
               
            var claims = new[]
            {
               new Claim(ClaimTypes.NameIdentifier , userFromRepo.Id.ToString()),
               new Claim(ClaimTypes.Name, userFromRepo.Username),

               // temporary solution to handle  admin role
               new Claim(ClaimTypes.Role, role),
            
               //add  cartId to token 
               new Claim("cartid", cartId.ToString())

           };

            var key = new SymmetricSecurityKey(Encoding.UTF8.
               GetBytes(_config.GetSection("AppSettings:Token").Value));

               var creds = new SigningCredentials(key, SecurityAlgorithms.HmacSha512Signature);

               var tokenDescriptor = new SecurityTokenDescriptor
               {
                   Subject = new ClaimsIdentity(claims),
                   Expires = DateTime.Now.AddDays(1),
                   SigningCredentials = creds
               };

               var tokenHandler = new JwtSecurityTokenHandler(); 

               var token = tokenHandler.CreateToken(tokenDescriptor );

               return Ok(new {token = tokenHandler.WriteToken(token)});
        }


        
    }
}