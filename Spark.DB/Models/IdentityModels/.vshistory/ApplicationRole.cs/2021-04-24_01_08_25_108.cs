using Microsoft.AspNetCore.Identity;
using System.Collections.Generic;

namespace Spark.DB.Models.IdentityModels
{
    public  class ApplicationRole : IdentityRole<int>
    {
        public virtual ICollection<ApplicationUserRole> UserRoles { get; set; }
    }
}
