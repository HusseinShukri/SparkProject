using Microsoft.AspNetCore.Mvc;
using System.Web.Mvc;

namespace Spark.API.Controllers
{
    [Authorize]
    [ApiController]
    [Route("[controller]")]
    public class ProfileController : Controller
    {
    }
}
