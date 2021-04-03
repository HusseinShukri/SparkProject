using Spark.Domain.Dto;
using System.Security.Claims;
using System.Threading.Tasks;

namespace Spark.DB.Repositories.GenericRepository
{
    public interface IGenericRepository<DomainEntity>
        where DomainEntity : IDomainModel
    {
        Task<bool> CreateEntityAsync(IDomainModel entity);
        Task<DomainEntity> FindEntityClaimsAsync(ClaimsPrincipal claimsPrincipal);
    }
}
