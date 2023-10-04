using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CarWash.BL.Models
{
    public class Product
    {
        public int Id { get; set; }
        public string Title { get; set; }
        public string Discription { get; set; }
        public float Price { get; set; }
        public bool OnStock { get; set; }
        public bool Visible { get; set; }
        public Category Category { get; set; }
    }
}
