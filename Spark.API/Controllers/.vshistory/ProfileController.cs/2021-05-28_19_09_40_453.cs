using AutoMapper;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Spark.Domain.Roles;
using Spark.Services.AccountServices;
using System.Threading.Tasks;

namespace Spark.API.Controllers
{
    //[Authorize]
    [ApiController]
    [Route("[controller]")]
    public class ProfileController : Controller
    {
        private readonly IMapper _mapper;
        private readonly IAccountServices _accountServices;

        public ProfileController(IMapper mapper, IAccountServices accountServices)
        {
            _mapper = mapper;
            _accountServices = accountServices;
        }

        [Route("[action]")]
        [HttpPost]
        //[Authorize(Roles = UserRoles.Student)]
        //[Authorize(Roles = UserRoles.Teacher)]
        public async Task<IActionResult> GetUserInformation()
        {
            if (User.Identity.IsAuthenticated)
            {
                return Ok(await _accountServices.UserIndormationAsync(User));
            }
            else
            {
                return BadRequest();
            }
        }
    }
}
