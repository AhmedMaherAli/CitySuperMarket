using Core.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Core.Interfaces
{
    public interface IProductRepository
    {
        public Task<List<Product>> GetProductsAsync(List<string> Includes);
        public Task<Product> GetProductByIdAsync(int id);
        public Task<List<ProductBrand>> GetBrandsAsync();
        public Task<List<ProductType>> GetTypesAsync();
    }

}
