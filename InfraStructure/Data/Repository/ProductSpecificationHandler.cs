using Core.Models;
using Core.Specifications;
using System;
using System.Linq.Expressions;

namespace Infrastructure.Data.Repository
{
    public class ProductSpecificationHandler
    {
        private readonly ProductSpecParameters _productParams;

        private GenericSpecifications<Product> _genericSpecifications;
        public ProductSpecificationHandler(ProductSpecParameters productParams,GenericSpecifications<Product> genericSpecifications)
        {
            _productParams = productParams;
            _genericSpecifications = genericSpecifications;

            Expression<Func<Product, bool>> filteringCondition = GetfilteringExpression();
            _genericSpecifications.Criteria = filteringCondition;

            productParams.Sort = _genericSpecifications.ValidateSortType(productParams.Sort);

            _genericSpecifications.OrderByExpression = GetSortingExpression();
            _genericSpecifications.ApplyPagging(productParams.PageSize *( productParams.PageIndex -1 ), productParams.PageSize);
        }
        
        public Expression<Func<Product, object>> GetSortingExpression()
        {
            if(string.IsNullOrEmpty(_productParams.Sort))
                return null;
            Expression<Func<Product, object>> exp;
            _productParams.Sort = _productParams.Sort.ToLower();
            switch(_productParams.Sort)
            {
                case "price":
                    exp = x => x.Price; 
                    break;
                case "id":
                    exp = x => x.Id;
                    break;
                case "brands":
                    exp = x => x.ProductBrandId;
                    break;
                case "types":
                    exp = x => x.ProductTypeId;
                    break;
                default: 
                    exp = x => x.Name;
                    break;
            };
            return exp;
        }
        public Expression<Func<Product, bool>> GetfilteringExpression()
        {
            Expression<Func<Product, bool>> exp = null;

            if (string.IsNullOrEmpty(_productParams.Search) && _productParams.BrandId == null && _productParams.TypeId == null)
                return null;

            exp = x =>
                (string.IsNullOrEmpty( _productParams.Search) || x.Name.ToLower().Contains(_productParams.Search))&&
                (!_productParams.BrandId.HasValue || (x.ProductBrandId == _productParams.BrandId)) &&
                (!_productParams.TypeId.HasValue || (x.ProductTypeId == _productParams.TypeId));

            return exp;
        }
        
    }
}
