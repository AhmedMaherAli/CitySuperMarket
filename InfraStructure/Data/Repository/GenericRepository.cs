using Core.Interfaces;
using Core.Models;
using Core.Specifications;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Threading.Tasks;

namespace Infrastructure.Data.Repository
{
    public class GenericRepository<T> : IGenericRepository<T> where T : ModelBase
    {
        private readonly MarketDbContext _marketDbContext;
        private readonly DbSet<T> _db;

        public GenericRepository(MarketDbContext marketDbContext)
        {
            _marketDbContext = marketDbContext;
            _db = _marketDbContext.Set<T>();
        }

        public async Task<IReadOnlyList<T>> GetAllAsync(GenericSpecifications<T> genericSpecifications=null)
        {
            IQueryable<T> query = _db;
            if (genericSpecifications != null)
            {
                if (genericSpecifications.Criteria != null)
                {
                    query = query.Where(genericSpecifications.Criteria);
                }
                if (genericSpecifications.Includes != null)
                {
                    foreach (string include in genericSpecifications.Includes)
                    {
                        query = query.Include(include);
                    }
                }
                if (genericSpecifications.OrderByExpression != null)
                {
                    if (string.IsNullOrEmpty(genericSpecifications.SortingType))
                    {
                        query = query.OrderBy(genericSpecifications.OrderByExpression);
                    }
                    else
                    {
                        query = query.OrderByDescending(genericSpecifications.OrderByExpression);
                    }
                }
                if (genericSpecifications.EnablePagging)
                {
                    query = query.Skip(genericSpecifications.Skip).Take(genericSpecifications.Take);
                }
            }
            return await query.AsNoTracking().ToListAsync();
        }

        public async Task<T> GetAsync(Expression<Func<T, bool>> expression = null, List<string> includes = null)
        {
            IQueryable<T> query = _db;
            
            if (includes != null)
            {
                foreach (string include in includes)
                {
                    query = query.Include(include);
                }
            }

            return await query.AsNoTracking().FirstOrDefaultAsync(expression);
        }
        public async Task<T> GetByIdAsync(int id, List<string> includes = null)
        {
            IQueryable<T> query = _db;

            if (includes != null)
            {
                foreach (string include in includes)
                {
                    query = query.Include(include);
                }
            }

            return await query.AsNoTracking().FirstOrDefaultAsync(p=>p.Id==id);
        }
    }
}
