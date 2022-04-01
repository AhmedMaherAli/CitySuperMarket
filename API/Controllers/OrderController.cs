using API.DTOs;
using API.Errors;
using AutoMapper;
using Core.Interfaces;
using Core.Models.OrderAggregate;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.Security.Claims;
using System.Threading.Tasks;

namespace API.Controllers
{
    [Authorize]
    [ApiController]
    [Route("api/[controller]")]
    public class OrderController : ControllerBase
    {
        private readonly IOrderService _orderService;
        private readonly IMapper _mapper;
        
        public OrderController(IOrderService orderService,IMapper mapper)
        {
            _orderService = orderService;
            _mapper = mapper;
        }


        [HttpPost]
        public async Task<ActionResult<OrderToReturnDTO> >CreateOrder([FromBody]OrderDTO orderDTO )
        {
            if(!ModelState.IsValid)
                return BadRequest(new ApiResponse(400, ModelState.Values.ToString()));

            var email = User.FindFirstValue(ClaimTypes.Email);
            var shippingAddress = _mapper.Map<AddressDTO, Address>(orderDTO.ShipToAddress);
            var order = await _orderService.CreateOrderAsync(email, orderDTO.DeliveryMethod, orderDTO.basketId, shippingAddress);
            if (order == null)
                return BadRequest(new ApiResponse(400, "Problem creating order."));
            return Ok( _mapper.Map<Order,OrderToReturnDTO>(order) );
        }

        [HttpGet("{orderId}")]
        public async Task<ActionResult<OrderToReturnDTO>> GetOrder(int orderId )
        {

            var buyerMail = User.FindFirstValue(ClaimTypes.Email);
            Order order =await _orderService.GetOrderByIdAsync(orderId, buyerMail);
            if (order == null) return BadRequest(new ApiResponse(404, "Order not found."));
            return Ok(_mapper.Map<Order, OrderToReturnDTO>(order));

        }

        [HttpGet]
        public async Task<ActionResult<IReadOnlyList<OrderToReturnDTO>>> GetUserOrders()
        {

            var buyerMail = User.FindFirstValue(ClaimTypes.Email);
            var orders = await _orderService.GetUserOrdersAsync(buyerMail);
            return Ok(_mapper.Map<IReadOnlyList<Order>,IReadOnlyList< OrderToReturnDTO>>(orders));

        }

        [HttpGet("deliveryMethods")]
        public async Task < ActionResult<IReadOnlyList<DeliveryMethod>>> GetDeliveryMethods()
        {
            var deliveryMethods = await _orderService.GetDeliveryMethodsAsync();
            return Ok(deliveryMethods);
        }

    }
}
