using Core.Models;
using Core.Models.OrderAggregate;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Core.Interfaces
{
    public interface IUnitOfWork
    {

        IGenericRepository<Product>Products{ get; }
        IGenericRepository<ProductBrand> ProductBrands{ get; }
        IGenericRepository<ProductType> ProductTypes { get; }
        IGenericRepository<Order> Orders { get; }
        IGenericRepository<DeliveryMethod> DeliveryMethod { get; }
        public void Dispose();
        public void UndoChanges();
        
        public Task<int> Save();
    }
}
