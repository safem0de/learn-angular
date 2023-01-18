using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace API.Models
{
    public class Planning : BaseEntity
    {
        public string? ShipmentDate { get; set; }

        public int Quantity { get; set; }

        public int OkPart { get; set; }

        public int NgPart { get; set; }

        public Product? Product { get; set; }

        public int ProductId { get; set; }
    }
}