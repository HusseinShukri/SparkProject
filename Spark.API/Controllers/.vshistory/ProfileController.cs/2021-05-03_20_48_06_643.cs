using Microsoft.AspNetCore.Mvc;
using System.Web.Mvc;

namespace Spark.API.Controllers
{
    [Authorize]
    [ApiController]
    [System.Web.Mvc.Route("[controller]")]
    public class ProfileController : Controller
    {
    }
}
