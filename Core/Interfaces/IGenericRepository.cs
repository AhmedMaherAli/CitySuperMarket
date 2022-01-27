using Core.Models;
using Core.Specifications;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace Core.Interfaces
{
    public interface IGenericRepository<T> where T : ModelBase 
    {
        public Task<T> GetByIdAsync(int id,List<string> includes=null);
        public Task<IReadOnlyList<T>> GetAllAsync(GenericSpecifications<T> genericSpecifications=null);
        public int GetCountOfLastQuery();
        public Task Insert(T entity);
        public  Task InsertRange(IEnumerable<T> entities);
        public void Update(T entity);
    }
}
