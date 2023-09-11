using Microsoft.AspNetCore.Mvc;

namespace CarWash.Client.Controllers
{
    public class ItemController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}
