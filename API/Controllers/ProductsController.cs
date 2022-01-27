using Core.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.Threading.Tasks;
using Core.Interfaces;
using AutoMapper;
using API.DTOs;
using API.Errors;
using Infrastructure.Data.Repository;
using Core.Specifications;
using System;

namespace API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]

    public class ProductsController : ControllerBase
    {
        private readonly IUnitOfWork _unitOfWork;
        private readonly IMapper _mapper;
        private  GenericSpecifications<Product> _genericSpecifications;

        public ProductsController(IUnitOfWork unitOfWork, IMapper mapper)
        {
            _unitOfWork = unitOfWork;
            _mapper = mapper;
        }

        [HttpGet]
        public async Task<ActionResult<IReadOnlyList<ProductToReturnDTO>>> GetAll([FromQuery]ProductSpecParameters productParams)
        {
            var includes = new List<string> { "ProductBrand", "ProductType" };
            _genericSpecifications= new GenericSpecifications<Product>(null, productParams.Sort, includes);
            ProductSpecificationHandler productSpecificationHandler = new ProductSpecificationHandler(productParams, _genericSpecifications);
            IReadOnlyList<Product> products = await _unitOfWork.Products.GetAllAsync(_genericSpecifications);
            var productsDTO= _mapper.Map<IList<ProductToReturnDTO>>(products);
            var result = new PaginationDTO(_genericSpecifications.QueryCount, productsDTO);
            return Ok(result);
        }

        [HttpGet("{id}",Name ="GetProduct")]
        [ProducesResponseType(typeof(ApiResponse),StatusCodes.Status400BadRequest)]
        public async Task<ActionResult<Product>> Get(int id)
        {
            var includes = new List<string> { "ProductBrand", "ProductType" };
            Product product = await _unitOfWork.Products.GetByIdAsync(id,includes);
            if (product == null)
            {
                return NotFound(new ApiResponse(404));
            }
            var result = _mapper.Map<ProductToReturnDTO>(product);
            return Ok(result);
        }

        [HttpGet("brands")]
        public async Task<ActionResult<IReadOnlyList<ProductBrand>>> GetBrands()
        {
            IReadOnlyList<ProductBrand> brands = await _unitOfWork.ProductBrands.GetAllAsync();
            return Ok(brands);
        }

        [HttpGet("types")]
        [ProducesResponseType(StatusCodes.Status200OK)]
        public async Task<ActionResult<IReadOnlyList<ProductType>>> GetTypes()
        {
            IReadOnlyList<ProductType> types = await _unitOfWork.ProductTypes.GetAllAsync();
            return Ok(types);
        }
        [HttpPost("add/product")]
        public async Task<IActionResult> CreateProduct([FromBody] ProductToAddDTO productToAddDTO)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
            try
            {
                var productToBeInserted = _mapper.Map<Product>(productToAddDTO);
                await _unitOfWork.Products.Insert(productToBeInserted);
                await _unitOfWork.Save();
                return CreatedAtRoute("GetProduct", new { id = productToBeInserted.Id }, productToBeInserted);
            }
            catch (Exception)
            {
                return StatusCode(500, "Internal server error, please try again later.");
            }
        }
    }
}
