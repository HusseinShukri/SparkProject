using Spark.Services.models;
using System.Threading.Tasks;

namespace Spark.Services.AccountServices
{
    public interface IAccountServices
    {
        Task<UserInitInfo> UserIndormationAsync(string email);
    }
}
