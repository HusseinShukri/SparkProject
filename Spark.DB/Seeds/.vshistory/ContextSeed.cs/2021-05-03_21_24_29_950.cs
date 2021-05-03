using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using Spark.DB.Models.IdentityModels;
using Spark.Domain.Roles;
using System.Threading.Tasks;

namespace Spark.DB.Seeds
{
    public static class ContextSeed
    {
        //public static void Seed(this ModelBuilder modelBuilder)
        //{
        //    # region Roles
        //    //modelBuilder.Entity<ApplicationRole>().HasData(
        //    //    new ApplicationRole
        //    //    {
        //    //        Id = 1,
        //    //        Name = "Admin",
        //    //        NormalizedName = "Admin".ToUpper()
        //    //    },
        //    //    new ApplicationRole
        //    //    {
        //    //        Id = 2,
        //    //        Name = "Student",
        //    //        NormalizedName = "Student".ToUpper()
        //    //    },
        //    //    new ApplicationRole
        //    //    {
        //    //        Id = 3,
        //    //        Name = "Teacher",
        //    //        NormalizedName = "Teacher".ToUpper()
        //    //    }
        //    //);
        //    #endregion 
        //}

        public static  void Seed(UserManager<ApplicationUser> userManager, RoleManager<IdentityRole> roleManager)
        {
            //Seed Roles
             roleManager.CreateAsync(new IdentityRole(UserRoles.Admin));
             roleManager.CreateAsync(new IdentityRole(UserRoles.Student));
             roleManager.CreateAsync(new IdentityRole(UserRoles.Teacher));
        }
    }
}
