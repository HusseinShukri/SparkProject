using Microsoft.AspNetCore.Mvc;
using System.Security.Claims;
using System.Threading.Tasks;

namespace Spark.Services.AccountServices
{
    public interface IAccountServices
    {
        Task<ActionResult<UserInitInfo>> UserIndormationAsync(ClaimsPrincipal User);
    }
}
