using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace API.Models
{
    public class CaseNotGood : BaseEntity
    {
        public string? CaseName { get; set; }

        public ProductType ProductType { get; set; }

        public int ProductTypeId { get; set; }
    }
}