using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Reflection;
using System.Text.Json;
using System.Threading.Tasks;
using Core.Models;
using Core.Models.OrderAggregate;
using Microsoft.Extensions.Logging;

namespace Infrastructure.Data
{
    public class MarketContextSeed
    {
        public static async Task SeedAsync(MarketDbContext context, ILoggerFactory loggerFactory)
        {
            try
            {
                var path = Path.GetDirectoryName(Assembly.GetExecutingAssembly().Location); // old path ../Infrastructure/ works for dev but on pro Seed are on Data folder directly
                if (!context.ProductBrands.Any())
                {
                    var brandsData = File.ReadAllText(path+@"/Data/SeedData/brands.json");
                    var brands = JsonSerializer.Deserialize<List<ProductBrand>>(brandsData);

                    foreach (var item in brands)
                    {
                        context.ProductBrands.Add(item);
                    }

                    await context.SaveChangesAsync();
                }

                if (!context.ProductTypes.Any())
                {
                    var typesData = File.ReadAllText(path + @"/Data/SeedData/types.json");
                    var types = JsonSerializer.Deserialize<List<ProductType>>(typesData);

                    foreach (var item in types)
                    {
                        context.ProductTypes.Add(item);
                    }

                    await context.SaveChangesAsync();
                }

                if (!context.Products.Any())
                {
                    var productsData = File.ReadAllText(path + @"/Data/SeedData/products.json");
                    var products = JsonSerializer.Deserialize<List<Product>>(productsData);

                    foreach (var item in products)
                    {
                        context.Products.Add(item);
                    }

                    await context.SaveChangesAsync();
                }
                if (!context.DeliveryMethods.Any())
                {
                    var dMethodsData = File.ReadAllText(path + @"/Data/SeedData/delivery.json");
                    var deliveryMethods= JsonSerializer.Deserialize<List<DeliveryMethod>>(dMethodsData);

                    foreach (var item in deliveryMethods)
                    {
                        context.DeliveryMethods.Add(item);
                    }

                    var result = await context.SaveChangesAsync();
                }

            }
            catch (Exception ex)
            {
                var logger = loggerFactory.CreateLogger<MarketContextSeed>();
                logger.LogError(ex.Message);
            }
        }
    }
}


/*if (!context.DeliveryMethods.Any())
{
    var dmData = File.ReadAllText(path+@"/Data/SeedData/delivery.json");
    var methods = JsonSerializer.Deserialize<List<DeliveryMethod>>(dmData);

    foreach (var item in methods)
    {
        context.DeliveryMethods.Add(item);
    }

    await context.SaveChangesAsync();
}*/