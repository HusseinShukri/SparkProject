using AutoMapper;
using Microsoft.AspNetCore.Identity;
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

        public async Task<bool> UserIndormationAsync(string email)
        {
            var userApp = await _userManager.FindByEmailAsync(email);
            var roles = await _userManager.GetRolesAsync(userApp);
            var mappedUser = _mapper.Map<UserInitInfo>(userApp);
            mappedUser.UserRole = roles[0];
            return mappedUser;
        }
    }
}
