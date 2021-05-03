using Microsoft.AspNetCore.Identity;
using Spark.Domain.Dto;
using Spark.Domain.Dto.CreateModels;
using System.Collections.Generic;
using System.Security.Claims;
using System.Threading.Tasks;

namespace Spark.DB.Repositories.AplicationUserRepository
{
    public interface IAplicationUserRepository
    {
        Task<bool> CreateUserAsync(ApplicationUserCreateModel model);
        Task<ApplicationUserDto> FindUserAsync(ClaimsPrincipal claimsPrincipal);
        Tasl<List<ApplicationUserDto>> GetAllUsersAsync(string userRole);
    }
}
