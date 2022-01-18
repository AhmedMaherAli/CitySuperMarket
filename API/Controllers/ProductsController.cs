using Infrastructure.Data;
using Core.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Core.Interfaces;

namespace API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]

    public class ProductsController : ControllerBase
    {
        private readonly IProductRepository _productRepository;

        public ProductsController(IProductRepository productRepository)
        {
            _productRepository = productRepository;
        }

        [HttpGet]
        [ProducesResponseType(StatusCodes.Status200OK)]
        public async Task<ActionResult<List<Product>>> GetAll()
        {                                                                                       
            List<Product>products= await _productRepository.GetProductsAsync(new List<string> { "ProductBrand", "ProductType" });
            return Ok(products);
        }

        [HttpGet("{id}")]
        [ProducesResponseType(StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        public async Task<ActionResult<Product>> Get(int id)
        {
            Product product = await _productRepository.GetProductByIdAsync(id);
            if (product == null)
            {
                return BadRequest("Invalid id.");
            }
            return Ok(product);
        }

        [HttpGet("brands")]
        [ProducesResponseType(StatusCodes.Status200OK)]
        public async Task<ActionResult<List<ProductBrand>>> GetBrands()
        {
            List<ProductBrand> brands = await _productRepository.GetBrandsAsync();
            return Ok(brands);
        }

        [HttpGet("types")]
        [ProducesResponseType(StatusCodes.Status200OK)]
        public async Task<ActionResult<List<ProductType>>> GetTypes()
        {
            List<ProductType> types = await _productRepository.GetTypesAsync();
            return Ok(types);
        }
    }
}
