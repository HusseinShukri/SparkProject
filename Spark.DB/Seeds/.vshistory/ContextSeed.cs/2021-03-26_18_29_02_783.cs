using Microsoft.EntityFrameworkCore;
using Spark.DB.Models.IdentityModels;

namespace Spark.DB.Seeds
{
    public static class PationtsSeed
    {
        public static void Seed(this ModelBuilder modelBuilder)
        {
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
