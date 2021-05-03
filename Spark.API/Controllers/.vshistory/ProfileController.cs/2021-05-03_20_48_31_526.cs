using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace Spark.API.Controllers
{
    [Authorize]
    [ApiController]
    [System.Web.Mvc.Route("[controller]")]
    public class ProfileController : Controller
    {
    }
}
