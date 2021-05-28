using AutoMapper;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Spark.Services.AccountServices;
using System.Threading.Tasks;

namespace Spark.API.Controllers
{
    [Authorize]
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
        [AllowAnonymous]
        public async Task<IActionResult> GetUserInformation([FromBody] string email)
        {
            var userApp = await _userManager.FindByEmailAsync(model.Email);
            var roles = await _userManager.GetRolesAsync(userApp);
            var mappedUser = _mapper.Map<UserInitInfo>(userApp);
            mappedUser.UserRole = roles[0];
            return Ok(mappedUser);
        }
    }
}
