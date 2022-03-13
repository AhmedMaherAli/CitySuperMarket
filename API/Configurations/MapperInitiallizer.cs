using API.DTOs;
using AutoMapper;
using Core.Models;
using API.Helpers;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Core.Models.Identity;

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
            CreateMap<Address,AddressDTO>().ReverseMap();
        }
    }
}
