using CarWash.Infrastructure.Repositories;
using Microsoft.AspNetCore.Mvc;

namespace CarWash.Client.Controllers
{
    public class AccountController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }

        public IActionResult Login()
        {
            //using var unitOfWork = new UnitOfWork();                
            return RedirectToAction("Index", "Home");
        }


    }
}
