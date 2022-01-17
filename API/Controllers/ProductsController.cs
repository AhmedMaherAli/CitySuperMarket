using Infrastructure.Data;
using Core.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]

    public class ProductsController : ControllerBase
    {
        private readonly MarketDbContext _marketDbContext;

        public ProductsController(MarketDbContext marketDbContext)
        {
            _marketDbContext = marketDbContext;
        }

        [HttpGet]
        [ProducesResponseType(StatusCodes.Status200OK)]
        public async Task<ActionResult<List<Product>>> GetAll()
        {
            List<Product>products= await _marketDbContext.Products.ToListAsync();
            return Ok(products);
        }

        [HttpGet("{id}")]
        [ProducesResponseType(StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        public async Task<ActionResult<Product>> Get(int id)
        {
            Product product = await _marketDbContext.Products.FirstOrDefaultAsync(p => p.Id == id);
            if (product == null)
            {
                return BadRequest("Invalid id.");
            }
            return Ok(product);
        }
    }
}
