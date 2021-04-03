using Spark.Domain.Dto;
using Spark.Domain.Dto.CreateModels;
using System.Security.Claims;
using System.Threading.Tasks;

namespace Spark.Services.StudentServices
{
    public interface IStudentService
    {
        Task<bool> CreateAsync(ApplicationUserCreateModel model);
        Task<ApplicationUserCreateModel> FindUserAsync(ClaimsPrincipal claimsPrincipal);
    }
}
