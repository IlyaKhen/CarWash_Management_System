using Microsoft.AspNetCore.Mvc;

namespace CarWash.Client.Controllers
{
    public class CategoryController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}
