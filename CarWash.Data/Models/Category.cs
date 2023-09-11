using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CarWash.Data.Models
{
    public class Category
    {
        public int Id { get; set; }
        public string Title { get; set; }
        public bool Vis { get; set; }
        public List<Item> Items { get; set; }
    }
}
