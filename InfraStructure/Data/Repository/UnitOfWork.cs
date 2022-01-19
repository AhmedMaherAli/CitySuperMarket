using Core.Interfaces;
using Core.Models;
using System;
using System.Threading.Tasks;

namespace Infrastructure.Data.Repository
{
    public class UnitOfWork : IUnitOfWork
    {
        private readonly MarketDbContext _marketDbContext;
        private IGenericRepository<Product> _products;
        private IGenericRepository<ProductBrand> _productBrands;
        private IGenericRepository<ProductType> _productTypes;

        public UnitOfWork(MarketDbContext marketDbContext)
        {
            _marketDbContext = marketDbContext;
        }

        public IGenericRepository<Product> Products => _products ?? new GenericRepository<Product>(_marketDbContext);
        public IGenericRepository<ProductBrand> ProductBrands => _productBrands ?? new GenericRepository<ProductBrand>(_marketDbContext);
        public IGenericRepository<ProductType> ProductTypes => _productTypes ?? new GenericRepository<ProductType>(_marketDbContext);

        public void Dispose()
        {
            _marketDbContext.Dispose();
            GC.SuppressFinalize(this);
        }

        public async Task Save()
        {
            await _marketDbContext.SaveChangesAsync();
        }
    }
}
