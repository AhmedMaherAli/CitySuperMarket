using Core.Interfaces;
using Core.Models;
using Core.Models.OrderAggregate;
using Microsoft.EntityFrameworkCore;
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
        private IGenericRepository<Order> _orders;
        private IGenericRepository<DeliveryMethod> _deliveryMethod;

        public UnitOfWork(MarketDbContext marketDbContext)
        {
            _marketDbContext = marketDbContext;
        }

        public IGenericRepository<Product> Products => _products ?? new GenericRepository<Product>(_marketDbContext);
        public IGenericRepository<ProductBrand> ProductBrands => _productBrands ?? new GenericRepository<ProductBrand>(_marketDbContext);
        public IGenericRepository<ProductType> ProductTypes => _productTypes ?? new GenericRepository<ProductType>(_marketDbContext);
        public IGenericRepository<Order> Orders => _orders ?? new GenericRepository<Order>(_marketDbContext);
        public IGenericRepository<DeliveryMethod> DeliveryMethod => _deliveryMethod ?? new GenericRepository<DeliveryMethod>(_marketDbContext);
        public void UndoChanges()
        {
            foreach (var entry in _marketDbContext.ChangeTracker.Entries())
            {
                switch (entry.State)
                {
                    // Under the covers, changing the state of an entity from  
                    // Modified to Unchanged first sets the values of all  
                    // properties to the original values that were read from  
                    // the database when it was queried, and then marks the  
                    // entity as Unchanged. This will also reject changes to  
                    // FK relationships since the original value of the FK  
                    // will be restored. 
                    case EntityState.Modified:
                        entry.State = EntityState.Unchanged;
                        break;
                    case EntityState.Added:
                        entry.State = EntityState.Detached;
                        break;
                    // If the EntityState is the Deleted, reload the date from the database.   
                    case EntityState.Deleted:
                        entry.Reload();
                        break;
                    default: break;
                }
            }
        }
        public void Dispose()
        {
            _marketDbContext.Dispose();
            GC.SuppressFinalize(this);
        }
        public async Task<int> Save()
        {   
            return await _marketDbContext.SaveChangesAsync();
        }
    }
}
