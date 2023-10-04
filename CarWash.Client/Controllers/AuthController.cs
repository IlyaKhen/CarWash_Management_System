using Microsoft.AspNetCore.Mvc;

namespace CarWash.Client.Controllers
{
    public class AuthController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }

        public string Login(string login, string password)
        {
            //return View();
            //using var unitOfWork = new UnitOfWork(new DbContextClass());
            return "Login";
        }

        public IActionResult Logout(int userId)
        {
            return RedirectToAction("Index", "Auth");
        }
    }
}
