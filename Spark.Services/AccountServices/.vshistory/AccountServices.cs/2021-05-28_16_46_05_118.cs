namespace Spark.Services.AccountServices
{
    public class AccountServices : IAccountServices
    {
        private readonly UserManager<ApplicationUser> _userManager;
        private readonly SignInManager<ApplicationUser> _signInManager;

        public AccountServices(IAplicationUserRepository aplicationUserRepository, IMapper mapper)
        {
            _aplicationUserRepository = aplicationUserRepository;
            _mapper = mapper;
        }

        public async Task<bool> CreateAsync(ApplicationUserCreateModel model)
        {
            model.UserRole = UserRoles.Student;
            return await _aplicationUserRepository.CreateUserAsync(model);
        }
    }
}
