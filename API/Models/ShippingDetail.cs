using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace API.Models
{
    public class ShippingDetail : BaseEntity
    {
        public string? PartNo { get; set; }

        public int Qty { get; set; }

        public Shipment? Shipment { get; set; }

        public int ShipmentId { get; set; }
    }
}