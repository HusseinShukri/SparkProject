using AutoMapper;
using Spark.DB.Repositories.AplicationUserRepository;
using Spark.DB.Repositories.GenericRepository;
using Spark.Domain.Dto;
using Spark.Domain.Dto.CreateModels;
using Spark.Domain.Roles;
using System.Security.Claims;
using System.Threading.Tasks;

namespace Spark.Services.StudentServices
{
    public class StudentService : IStudentService
    {
        private readonly IAplicationUserRepository _aplicationUserRepository;
        private readonly IMapper _mapper;

        public StudentService(IAplicationUserRepository aplicationUserRepository, IMapper mapper)
        {
            _aplicationUserRepository = aplicationUserRepository;
            _mapper = mapper;
        }

        public async Task<bool> CreateAsync(ApplicationUserCreateModel model)
        {
            model.UserRole = UserRoles.Student;
            return await _aplicationUserRepository.CreateUserAsync(model);
        }

        public async Task<ApplicationUserCreateModel> FindUserAsync(ClaimsPrincipal claimsPrincipal)
        {
            return _mapper.Map<ApplicationUserCreateModel>(await _aplicationUserRepository.FindUserAsync(claimsPrincipal));
        }
    }
}
