using Core.Models;
using Core.Specifications;
using System;
using System.Collections.Generic;
using System.Linq.Expressions;
using System.Threading.Tasks;

namespace Core.Interfaces
{
    public interface IGenericRepository<T> where T : ModelBase 
    {
        public Task<T> GetByIdAsync(int id,List<string> includes=null);
        public Task<T> GetAsync(Expression<Func<T, bool>> expression = null, List<string> includes = null);
        public Task<IReadOnlyList<T>> GetAllAsync(GenericSpecifications<T> genericSpecifications=null);
        public int GetCountOfLastQuery();
        public Task Insert(T entity);
        public  Task InsertRange(IEnumerable<T> entities);
        public void Update(T entity);
        public void Delete(T entity);
    }
}
