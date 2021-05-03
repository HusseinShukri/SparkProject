using Microsoft.AspNetCore.Identity;
using System.Collections.Generic;

namespace Spark.DB.Models.IdentityModels
{
    public class ApplicationUser : IdentityUser<int>

    {
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public byte[] ProfilePicture { get; set; }
        public virtual ICollection<ApplicationUserRole> UserRoles { get; set; }
    }
}