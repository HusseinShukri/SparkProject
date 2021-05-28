using AutoMapper;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;

namespace Spark.API.Controllers
{
    [Authorize]
    [ApiController]
    [Route("[controller]")]
    public class ProfileController : Controller
    {
        private readonly IMapper _mapper;

        public ProfileController(IMapper mapper)
        {
            _mapper = mapper;
        }

        [Route("[action]")]
        [HttpPost]
        [AllowAnonymous]
        public async Task<IActionResult> GetUserInformation([FromBody] string email)
        {

            return Ok(mappedUser);
        }
    }
}
