using AutoMapper;
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
        private readonly IGenericRepository<ApplicationUserCreateModel> _genericRepository;
        private readonly IMapper _mapper;

        public StudentService(IGenericRepository<ApplicationUserCreateModel> genericRepository, IMapper mapper)
        {
            _genericRepository = genericRepository;
            this._mapper = mapper;
        }

        public async Task<bool> CreateAsync(ApplicationUserCreateModel model)
        {
            model.UserRole = UserRoles.Student;
            return await _genericRepository.CreateEntityAsync(model);
        }

        public async Task<ApplicationUserCreateModel> FindUserAsync(ClaimsPrincipal claimsPrincipal)
        {
            return _mapper.Map<ApplicationUserCreateModel>(await _genericRepository.FindEntityClaimsAsync(claimsPrincipal));
        }
    }
}
