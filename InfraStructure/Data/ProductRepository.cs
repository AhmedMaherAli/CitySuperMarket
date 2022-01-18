using Core.Interfaces;
using Core.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Infrastructure.Data
{
    public class ProductRepository : IProductRepository
    {
        private readonly MarketDbContext _marketDbContext;

        public ProductRepository(MarketDbContext marketDbContext)
        {
            _marketDbContext = marketDbContext;
        }

        public async Task<List<ProductBrand>> GetBrandsAsync()
        {
            return await _marketDbContext.ProductBrands.ToListAsync();
        }

        public async Task<Product> GetProductByIdAsync(int id)
        {
            
            Product product = await _marketDbContext.Products
                            .Include(p=>p.ProductBrand)
                            .Include(p=>p.ProductType).FirstOrDefaultAsync(p=>p.Id==id);
            return product;
        }

        public async Task<List<Product>> GetProductsAsync(List<string>Includes)
        {
            IQueryable<Product> query = _marketDbContext.Set<Product>();
            foreach (string include in Includes)
            {
                query=query.Include(include);
            }
            List<Product> products = await query.ToListAsync();
            return products;
        }

        public async Task<List<ProductType>> GetTypesAsync()
        {
            return await _marketDbContext.ProductTypes.ToListAsync();
        }
    }
}
