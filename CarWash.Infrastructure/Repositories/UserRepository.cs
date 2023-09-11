using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using CarWash.Infrastructure.Interfaces;
using CarWash.Data.Models;
using CarWash.Data;

namespace CarWash.Infrastructure.Repositories
{
    public class UserRepository : GenericRepository<User>, IUserRepository
    {
        public UserRepository(DbContextClass dbContex) : base(dbContex)
        {

        }
    }
}
