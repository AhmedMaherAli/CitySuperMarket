using System.ComponentModel.DataAnnotations;

namespace API.DTOs
{
    public class BasketItemDTO
    {
        [Required]
        public string Name { get; set; }
        [Required]
        public int Id { get; set; }
        [Required]
        [Range(0.1,double.MaxValue, ErrorMessage ="Price should be greate than 0.1LE")]
        public decimal Price { get; set; }
        [Required]
        [Range(1,double.MaxValue,ErrorMessage ="Quantity must be greater than 1.")]
        public int Quantity { get; set; }
        [Required]
        public string PictureUrl { get; set; }
        [Required]
        public string Brand { get; set; }
        [Required]
        public string Type { get; set; }
    }
}
