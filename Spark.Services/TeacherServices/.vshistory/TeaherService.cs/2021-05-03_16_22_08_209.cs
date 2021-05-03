using AutoMapper;
using Spark.DB.Repositories.AplicationUserRepository;
using Spark.Domain.Dto.CreateModels;
using System.Security.Claims;
using System.Threading.Tasks;


namespace Spark.Services.TeacherServices
{
    public class TeaherService : ITeaherService
    {
        private readonly IAplicationUserRepository _aplicationUserRepository;
        private readonly IMapper _mapper;

        public TeaherService(IAplicationUserRepository aplicationUserRepository, IMapper mapper)
        {
            _aplicationUserRepository = aplicationUserRepository;
            _mapper = mapper;
        }

        public Task<bool> CreateAsync(ApplicationUserCreateModel model)
        {
            throw new System.NotImplementedException();
        }

        public Task<ApplicationUserCreateModel> FindUserAsync(ClaimsPrincipal claimsPrincipal)
        {
            throw new System.NotImplementedException();
        }
    }
}
