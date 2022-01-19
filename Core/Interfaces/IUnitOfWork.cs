using Core.Models;
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
        public void Dispose();
        public Task Save();
    }
}
