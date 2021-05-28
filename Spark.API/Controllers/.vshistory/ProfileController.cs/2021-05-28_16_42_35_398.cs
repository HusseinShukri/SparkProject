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
            var userApp = await _userManager.FindByEmailAsync(model.Email);
            var roles = await _userManager.GetRolesAsync(userApp);
            var mappedUser = _mapper.Map<UserInitInfo>(userApp);
            mappedUser.UserRole = roles[0];
            CookieOptions cookieOptions = new CookieOptions
            {
                Expires = DateTime.Now.AddDays(7)

            };
            Response.Cookies.Append("user", JsonSerializer.Serialize(mappedUser), cookieOptions);
            return Ok(mappedUser);

        }

    }
}
