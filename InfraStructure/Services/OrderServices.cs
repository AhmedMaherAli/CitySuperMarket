using Core.Interfaces;
using Core.Models;
using Core.Models.OrderAggregate;
using Core.Specifications;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Infrastructure.Services
{
    public class OrderServices : IOrderService
    {
        private readonly IBasketRepository _basketRepository;
        private readonly IUnitOfWork _unitOfWork;

        public OrderServices(IBasketRepository basketRepository, IUnitOfWork unitOfWork)
        {
            _basketRepository = basketRepository;
            _unitOfWork = unitOfWork;
        }

        public async Task<Order> CreateOrderAsync(string buyerEmail, int deliveryMethodId, string basketId, Address shippingAddress)
        {
            var basket = await _basketRepository.GetBasketAsync(basketId);
            var orderItems = new List<OrderItem>();
            foreach(var item in basket.Items)
            {
                Product product= await _unitOfWork.Products.GetByIdAsync(item.Id);
                ProductItemOrdered productItemOrdered=new ProductItemOrdered(product.Id, product.Name, product.PictureUrl );
                orderItems.Add(new OrderItem( productItemOrdered,Convert.ToDecimal(product.Price), item.Quantity) );
            }
            decimal subtotal = orderItems.Sum(item => item.Price*item.Quantity);

            Order order = new Order(orderItems, buyerEmail, shippingAddress, deliveryMethodId, subtotal);
            await _unitOfWork.Orders.Insert(order);

            var result = await _unitOfWork.Save();
            if (result <= 0) return null;

            await _basketRepository.DeleteBasketAsync(basketId);
            
            
            return order;
        }

        public async Task<IReadOnlyList<DeliveryMethod>> GetDeliveryMethodsAsync()
        {
            return await _unitOfWork.DeliveryMethod.GetAllAsync();
        }

        public async Task<Order> GetOrderByIdAsync(int id, string buyerEmail)
        {

            var includes = new List<string> {"DeliveryMethod", "OrderItems" };
            var order = await _unitOfWork.Orders.GetAsync(o => o.BuyerEmail == buyerEmail&&o.Id==id, includes);
            return order;
        }

        public async Task<IReadOnlyList<Order>> GetUserOrdersAsync(string buyerEmail)
        {
                                                                
            var includes = new List<string> { "DeliveryMethod","OrderItems"};
            GenericSpecifications<Order> _genericSpecifications = new GenericSpecifications<Order>(o => o.BuyerEmail == buyerEmail,null, includes);
            _genericSpecifications.OrderByExpression = o => o.OrderDate;
            var order = await _unitOfWork.Orders.GetAllAsync(_genericSpecifications);
            return order;
        }
    }
}
