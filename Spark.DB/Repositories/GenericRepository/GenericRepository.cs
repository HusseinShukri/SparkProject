using AutoMapper;
using Spark.DB.Repositories.AplicationUserRepository;
using Spark.Domain.Dto;
using Spark.Domain.Dto.CreateModels;
using System.Security.Claims;
using System.Threading.Tasks;

namespace Spark.DB.Repositories.GenericRepository
{
    public class GenericRepository<DomainEntity> : IGenericRepository<DomainEntity>
         where DomainEntity : IDomainModel
    {

        private readonly IAplicationUserRepository _aplicationUserRepository;
        private readonly IMapper _mapper;

        public GenericRepository(IAplicationUserRepository aplicationUserRepository,IMapper mapper)
        {
            _aplicationUserRepository = aplicationUserRepository;
            _mapper = mapper;
        }

        public async Task<bool> CreateEntityAsync(IDomainModel entity)
        {
            var result = await _aplicationUserRepository.CreateUserAsync((ApplicationUserCreateModel)(object)entity);
            if (result.Succeeded)
            {
                return true;
            }
            else
            {
                return false;
            }
        }

        public async Task<DomainEntity> FindEntityClaimsAsync(ClaimsPrincipal claimsPrincipal)
        {
            return (DomainEntity)(object)_mapper.Map<ApplicationUserCreateModel>( await _aplicationUserRepository.FindUserAsync(claimsPrincipal));
        }
    }
}
