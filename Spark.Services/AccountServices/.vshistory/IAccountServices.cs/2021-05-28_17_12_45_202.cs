using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;

namespace Spark.Services.AccountServices
{
    public interface IAccountServices
    {
        Task<IActionResult> UserIndormationAsync(string email);
    }
}
