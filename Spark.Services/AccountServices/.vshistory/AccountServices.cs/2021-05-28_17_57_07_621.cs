using AutoMapper;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Spark.DB.Models.IdentityModels;
using Spark.Services.models;
using System.Security.Claims;
using System.Threading.Tasks;

namespace Spark.Services.AccountServices
{
    public class AccountServices : IAccountServices
    {
        private readonly IMapper _mapper;
        private readonly UserManager<ApplicationUser> _userManager;
        private readonly SignInManager<ApplicationUser> _signInManager;


        public AccountServices(UserManager<ApplicationUser> userManager
             , SignInManager<ApplicationUser> signInManager,
            IMapper mapper)
        {
            _userManager = userManager;
            _signInManager = signInManager;
            _mapper = mapper;
        }

        public async Task<ActionResult<UserInitInfo>> UserIndormationAsync(ClaimsPrincipal User)
        {
            var applicationUser = await _userManager.GetUserAsync(User);
            var roles = await _userManager.GetRolesAsync(applicationUser);
            var mappedUser = _mapper.Map<UserInitInfo>(applicationUser);
            mappedUser.UserRole = roles[0];
            return mappedUser;
        }
    }
}
