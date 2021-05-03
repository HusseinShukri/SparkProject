using Microsoft.AspNetCore.Identity;
using Spark.Domain.Dto;
using Spark.Domain.Dto.CreateModels;
using System.Security.Claims;
using System.Threading.Tasks;

namespace Spark.DB.Repositories.AplicationUserRepository
{
    public interface IAplicationUserRepository
    {
        Task<IdentityResult> CreateUserAsync(ApplicationUserCreateModel model);
        Task<bool> FindUserAsync(ClaimsPrincipal claimsPrincipal);
    }
}
