using System.Collections.Generic;

namespace OnlineFruitVegShop.API.Models
{
    public class BillingAddress
    {

        public BillingAddress()
        {
            
        }
        public int Id { get; set; }
        public string Firstname { get; set; }
        public string Lastname { get; set; }
        public string EmailAddress { get; set; }
        public string Address { get; set; }
        public string Address2 { get; set; }
        public string Country { get; set; }
        public string State { get; set; }
        public string Zip { get; set; }






    }
}