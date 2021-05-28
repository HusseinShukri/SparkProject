using Spark.Services.models;
using System.Security.Claims;
using System.Threading.Tasks;

namespace Spark.Services.AccountServices
{
    public interface IAccountServices
    {
        Task<UserInitInfo> UserIndormationAsync(ClaimsPrincipal User);
    }
}
