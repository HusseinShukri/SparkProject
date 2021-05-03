using System;
using System.Collections.Generic;
using System.Text;

namespace Spark.Services.TeacherServices
{
   public interface ITeaherService
    {
        Task<bool> CreateAsync(ApplicationUserCreateModel model);
        Task<ApplicationUserCreateModel> FindUserAsync(ClaimsPrincipal claimsPrincipal);
    }
}
