using AutoMapper;
using Spark.DB.Repositories.AplicationUserRepository;
using Spark.Domain.Dto;
using Spark.Domain.Dto.CreateModels;
using Spark.Domain.Roles;
using System.Collections.Generic;
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

        public async Task<bool> CreateAsync(ApplicationUserCreateModel model)
        {
            model.UserRole = UserRoles.Teacher;
            return await _aplicationUserRepository.CreateUserAsync(model);
        }

        public async Task<ApplicationUserCreateModel> FindUserAsync(ClaimsPrincipal claimsPrincipal)
        {
            return _mapper.Map<ApplicationUserCreateModel>(await _aplicationUserRepository.FindUserAsync(claimsPrincipal));
        }

        public Task<List<ApplicationUserDto>> GetAllEmployeeAsync()
        {
            throw new System.NotImplementedException();
        }
    }
}
