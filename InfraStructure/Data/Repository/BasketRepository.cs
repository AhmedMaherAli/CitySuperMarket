using Core.Interfaces;
using Core.Models;
using StackExchange.Redis;
using System;
using System.Text.Json;
using System.Threading.Tasks;

namespace Infrastructure.Data.Repository
{
    public class BasketRepository : IBasketRepository
    {
        private readonly IDatabase _database;
        public BasketRepository(IConnectionMultiplexer redis)
        {
            _database = redis.GetDatabase();
        }
        public async Task<bool> DeleteBasketAsync(string basketId)
        {
            return await _database.KeyDeleteAsync(basketId); 
        }

        public async Task<CustomerBasket> GetBasketAsync(string basketId)
        {
            var data = await _database.StringGetAsync(basketId);
            return data.IsNullOrEmpty ? null : JsonSerializer.Deserialize<CustomerBasket>(data); 
        }
        public async Task<CustomerBasket> UpsertBasketAsync(CustomerBasket customerBasket)
        {
            var created = await _database.StringSetAsync(customerBasket.Id,
                    JsonSerializer.Serialize(customerBasket),TimeSpan.FromDays(30));
            if (created)
                return (await GetBasketAsync(customerBasket.Id));
            return null;

        }
    }
}
