using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace API.Models
{
    public class Product : BaseEntity
    {
        public string? PartNo { get; set; }

        public string? PartName { get; set; }

        public string? Size { get; set; }

        public ProductType? ProductType { get; set; }

        public int ProductTypeId { get; set; }
    }
}