﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CarWash.BL.Models
{
    public class Account
    {
        public int Id { get; set; }
        public int UserId { get; set; }
        public bool Locked { get; set; }
    }
}
