using API.DTOs;
using AutoMapper;
using Core.Models;
using API.Helpers;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Core.Models.Identity;
using Core.Models.OrderAggregate;

namespace API.Configurations
{
    public class MapperInitiallizer : Profile
    {
        public MapperInitiallizer()
        {
            CreateMap<Product, ProductToReturnDTO>()
                .ForMember(m => m.ProductBrand, o => o.MapFrom(s => s.ProductBrand.Name))
                .ForMember(m => m.ProductType, o => o.MapFrom(s => s.ProductType.Name))
                .ForMember(d => d.PictureUrl, o => o.ResolveUsing<ProductUrlResolver>())
                //.ForMember(m=> m.PictureUrl, o => o.MapFrom<ProductUrlResolver>())
                .ReverseMap();
            CreateMap<Product, ProductToAddDTO>().ReverseMap();
            CreateMap<Core.Models.Identity.Address,AddressDTO>().ReverseMap();
            CreateMap<AddressDTO, Core.Models.OrderAggregate.Address>();
            CreateMap<AppUser, UserDTO>().ReverseMap();
            CreateMap<AppUser, RegisterDTO>().ReverseMap().ForMember(m => m.UserName, o => o.MapFrom(s => s.Email));
            CreateMap<CustomerBasketDTO, CustomerBasket>();
            CreateMap<BasketItemDTO, BasketItem>();

            CreateMap<Order, OrderToReturnDTO>()
                .ForMember(o => o.DeliveryMethodName, o => o.MapFrom(s => s.DeliveryMethod.ShortName))
                .ForMember(o => o.ShippingPrice, o => o.MapFrom(s => s.DeliveryMethod.Price));

            CreateMap<OrderItem, OrderItemDTO>()
                .ForMember(o => o.ProductName, o => o.MapFrom(s => s.ItemOrdered.ProductName))
                .ForMember(o => o.ProductId, o => o.MapFrom(s => s.ItemOrdered.ProductId))
                .ForMember(o => o.PictureUrl, o => o.MapFrom(s => s.ItemOrdered.PictureUrl))
                .ForMember(o => o.PictureUrl, o => o.ResolveUsing<OrderItemUrlResolver>());
        }
    }
}
