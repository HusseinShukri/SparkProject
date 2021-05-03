using Microsoft.AspNetCore.Identity;
using Spark.DB.Models.DBModels;
using System.Collections.Generic;

namespace Spark.DB.Models.IdentityModels
{
    public class ApplicationUser : IdentityUser<int>, IDbModel

    {
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public byte[] ProfilePicture { get; set; }
        public virtual ICollection<ApplicationUserRole> UserRoles { get; set; }
    }
}