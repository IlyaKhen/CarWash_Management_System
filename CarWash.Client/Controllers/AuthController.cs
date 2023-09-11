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
            return "Login";
        }

        public IActionResult Logout(int userId)
        {
            return RedirectToAction("Index", "Auth");
        }
    }
}
