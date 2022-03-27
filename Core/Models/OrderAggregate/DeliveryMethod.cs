using System;

namespace Core.Models.OrderAggregate
{
    public class DeliveryMethod:ModelBase
    {
        public DeliveryMethod()
        {
        }

        public DeliveryMethod(string shortName, string description, string deliveryTime, decimal price)
        {
            ShortName = shortName;
            Description = description;
            DeliveryTime = deliveryTime;
            Price = price;
        }

        public string ShortName { get; set; }
        public string Description { get; set; }
        public string DeliveryTime { get; set; }
        public Decimal Price { get; set; }
    }
}
