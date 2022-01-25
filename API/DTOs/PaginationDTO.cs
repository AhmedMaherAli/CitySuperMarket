using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace API.DTOs
{
    public class PaginationDTO
    {
        public PaginationDTO(int productsCount, IList<ProductToReturnDTO> products)
        {
            Count = productsCount;
            Products = products;
        }

        public int Count { get; set; }
        public IList<ProductToReturnDTO> Products { get; set; }

    }
}
