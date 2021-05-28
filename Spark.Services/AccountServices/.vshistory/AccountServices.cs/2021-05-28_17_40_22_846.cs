using AutoMapper;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Spark.DB.Models.IdentityModels;
using Spark.Services.models;
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

        public async Task<IActionResult> UserIndormationAsync()
        {
            currentUser = (await _userManager.FindByEmailAsync(model.Email));
            if (currentUser != null)
            {
            }
            else {
                return BadRequest("Invalid Email or password");
            }
            var userApp = await _userManager.FindByEmailAsync(email);
            var roles = await _userManager.GetRolesAsync(userApp);
            var mappedUser = _mapper.Map<UserInitInfo>(userApp);
            mappedUser.UserRole = roles[0];
            return mappedUser;
        }
    }
}
