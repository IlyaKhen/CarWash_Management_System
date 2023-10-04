using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CarWash.BL.Models
{
    public class Category
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public bool Visible { get; set; }
        public List<Product> Products { get; set; }
    }
}
