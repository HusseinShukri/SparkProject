using Spark.Domain.Dto.CreateModels;
using System.Security.Claims;
using System.Threading.Tasks;


namespace Spark.Services.TeacherServices
{
    public class TeaherService : ITeaherService
    {
        public TeaherService()
        {

        }

        public Task<bool> CreateAsync(ApplicationUserCreateModel model)
        {
            throw new System.NotImplementedException();
        }

        public Task<ApplicationUserCreateModel> FindUserAsync(ClaimsPrincipal claimsPrincipal)
        {
            throw new System.NotImplementedException();
        }
    }
}
