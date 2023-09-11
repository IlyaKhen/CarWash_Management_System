using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using CarWash.Data.Models;

namespace CarWash.Infrastructure.Interfaces
{
    public interface IUserRepository : IGenericRepository<User>
    {
    }
}
