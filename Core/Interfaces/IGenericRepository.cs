using Core.Models;
using Core.Specifications;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Text;
using System.Threading.Tasks;

namespace Core.Interfaces
{
    public interface IGenericRepository<T> where T : ModelBase 
    {
        public Task<T> GetByIdAsync(int id,List<string> includes=null);
        public Task<IReadOnlyList<T>> GetAllAsync(GenericSpecifications<T> genericSpecifications=null);
    }
}
