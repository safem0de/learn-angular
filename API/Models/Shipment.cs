using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace API.Models
{
    public class Shipment : BaseEntity
    {
        public string? ShippingDate { get; set; }

        public string? ShippingTime { get; set; }

        public int TotalQty { get; set; }

        public int QtyPerTray { get; set; }

        public string? EmpNo { get; set; }
    }
}