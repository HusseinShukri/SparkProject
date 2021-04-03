using Microsoft.AspNetCore.Identity;
using Spark.DB.Models.DBModels;
using System.Collections.Generic;

namespace Spark.DB.Models.IdentityModels
{
    public class ApplicationUser : IdentityUser<int>, IDbModel

    {
        public virtual ICollection<ApplicationUserRole> UserRoles { get; set; }
    }
}