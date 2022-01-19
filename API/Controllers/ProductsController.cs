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
using API.Configurations;
using AutoMapper;
using API.DTOs;
using API.Errors;

namespace API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]

    public class ProductsController : ControllerBase
    {
        private readonly IUnitOfWork _unitOfWork;
        private readonly IMapper _mapper;

        public ProductsController(IUnitOfWork unitOfWork, IMapper mapper)
        {
            _unitOfWork = unitOfWork;
            _mapper = mapper;
        }

        [HttpGet]
        [ProducesResponseType(StatusCodes.Status200OK)]
        public async Task<ActionResult<IReadOnlyList<ProductToReturnDTO>>> GetAll()
        {
            var includes = new List<string> { "ProductBrand", "ProductType" };
            IReadOnlyList<Product> products = await _unitOfWork.Products.GetAllAsync(null,null, includes);
            var result = _mapper.Map<IList<ProductToReturnDTO>>(products);
            return Ok(result);
        }

        [HttpGet("{id}")]
        [ProducesResponseType(StatusCodes.Status200OK)]
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
        [ProducesResponseType(StatusCodes.Status200OK)]
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
    }
}
