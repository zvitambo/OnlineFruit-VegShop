using System.ComponentModel.DataAnnotations;

namespace OnlineFruitVegShop.API.Dtos
{
    public class UserRegistrationDto
    {
        [Required]
        public string Username { get; set; }

        [Required]
        [StringLength(12, MinimumLength = 4,ErrorMessage = "You specify a password 4 characters or more long ")]
        public string Password { get; set; }
    }
}