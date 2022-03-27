using System;

namespace Core.Models.OrderAggregate
{
    public class OrderItem:ModelBase
    {
        public OrderItem()
        {
        }

        public OrderItem(ProductItemOrdered itemOrdered, decimal price, int quantity)
        {
            ItemOrdered = itemOrdered;
            Price = price;
            Quantity = quantity;
        }

        public ProductItemOrdered ItemOrdered { get; set; }
        public Decimal Price { get; set; }
        public int Quantity { get; set; }


    }
}
