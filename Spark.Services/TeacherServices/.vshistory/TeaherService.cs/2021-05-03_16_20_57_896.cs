using Spark.Domain.Dto.CreateModels;
using System.Security.Claims;
using System.Threading.Tasks;


namespace Spark.Services.TeacherServices
{
    public class TeaherService : ITeaherService
    {
        public TeaherService()
        {
            Task<bool> CreateAsync(ApplicationUserCreateModel model);
            Task<ApplicationUserCreateModel> FindUserAsync(ClaimsPrincipal claimsPrincipal);
        }
    }
}
