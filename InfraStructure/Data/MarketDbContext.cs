using Core.Models;
using Microsoft.EntityFrameworkCore;

namespace Infrastructure.Data
{
    public class MarketDbContext:DbContext
    {
        public MarketDbContext(DbContextOptions<MarketDbContext> options):base(options)
        {

        }
        public DbSet<Product>Products{ get; set; }

    }
}
