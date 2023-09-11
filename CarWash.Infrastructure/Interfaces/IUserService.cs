using CarWash.Data.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CarWash.Infrastructure.Interfaces
{
    public interface IUserService
    {
        Task<bool> CreateUser(User user);

        Task<IEnumerable<User>> GetAllUsers();

        Task<User> GetUserById(int userId);

        Task<User> GetUserByName(string name);

        Task<bool> UpdateUser(User user);

        Task<bool> DeleteUser(int userId);
    }
}
