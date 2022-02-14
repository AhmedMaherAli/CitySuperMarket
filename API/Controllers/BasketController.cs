using API.Errors;
using Core.Interfaces;
using Core.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;

namespace API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class BasketController : ControllerBase
    {
        private readonly IBasketRepository _basketRepository;

        public BasketController(IBasketRepository basketRepository)
        {
            _basketRepository = basketRepository;
        }
        [HttpGet]
        public async Task<IActionResult> GetBasketById(string Id)
        {
            var basket = await _basketRepository.GetBasketAsync(Id);

            return Ok( basket ?? new CustomerBasket(Id) );
        }
        [HttpPost]
        public async Task<IActionResult> UpdateBasket(CustomerBasket customerBasket)
        {
            var updatedBasket = await _basketRepository.UpsertBasketAsync(customerBasket);
            return Ok(updatedBasket);
        }
        [HttpDelete]
        public async Task DeleteBasket(string Id)
        {
            await _basketRepository.DeleteBasketAsync(Id);
        }
    }
}
