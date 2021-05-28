using AutoMapper;
using Microsoft.AspNetCore.Identity;
using Spark.DB.Models.IdentityModels;

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

        public async Task<bool> CreateAsync(ApplicationUserCreateModel model)
        {
            model.UserRole = UserRoles.Student;
            return await _aplicationUserRepository.CreateUserAsync(model);
        }
    }
}
