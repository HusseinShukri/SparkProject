using Microsoft.AspNetCore.Mvc;
using System.Security.Claims;
using System.Threading.Tasks;

namespace Spark.Services.AccountServices
{
    public interface IAccountServices
    {
        Task<IActionResult> UserIndormationAsync(ClaimsPrincipal User);
    }
}
