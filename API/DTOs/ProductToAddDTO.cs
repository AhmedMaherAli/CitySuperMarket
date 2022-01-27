using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace API.DTOs
{
    public class ProductToAddDTO
    {
        public string Code { get; set; }
        [Required]
        public string Name { get; set; }
        public string Description { get; set; }
        public double Price { get; set; }
        public string PictureUrl { get; set; }
        public int ProductTypeId { get; set; }
        public int ProductBrandId { get; set; }
    }
}
