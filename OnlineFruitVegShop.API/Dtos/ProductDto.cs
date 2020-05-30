namespace OnlineFruitVegShop.API.Dtos
{
    public class ProductDto
    {

        public int ProductId { get; set; }

        public string Name { get; set; }

        public string Description { get; set; }

        public string PhotoUrl { get; set; }

        public string Price { get; set; }

        public int Quantity { get; set; }

        public int total { get; set; }

        public bool checkedOut { get; set; }


        }
}