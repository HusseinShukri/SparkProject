using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using Spark.DB.Models.IdentityModels;

namespace Spark.DB.Seeds
{
    public static class PationtsSeed
    {
        public static async System.Threading.Tasks.Task SeedAsync(this ModelBuilder modelBuilder)
        {
                //Seed Roles
                await roleManager.CreateAsync(new IdentityRole(Enums.Roles.SuperAdmin.ToString()));
                await roleManager.CreateAsync(new IdentityRole(Enums.Roles.Admin.ToString()));
                await roleManager.CreateAsync(new IdentityRole(Enums.Roles.Moderator.ToString()));
                await roleManager.CreateAsync(new IdentityRole(Enums.Roles.Basic.ToString()));
            
            # region Roles
            modelBuilder.Entity<ApplicationRole>().HasData(
                new ApplicationRole
                {
                    Id = 1,
                    Name = "Admin",
                    NormalizedName = "Admin".ToUpper()
                },
                new ApplicationRole {
                    Id=2,
                    Name= "Student",
                    NormalizedName= "Student".ToUpper()
                },
                new ApplicationRole { 
                    Id = 3,
                    Name= "Teacher",
                    NormalizedName= "Teacher".ToUpper()
                }
            );
            #endregion 
        }
    }
}
