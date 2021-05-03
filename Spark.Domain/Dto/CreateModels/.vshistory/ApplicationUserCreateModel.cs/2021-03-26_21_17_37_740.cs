namespace Spark.Domain.Dto.CreateModels
{
    public  class ApplicationUserCreateModel : IDomainModel
    {
        public ApplicationUserDto ApplicationUser { get; set; }
        public string Password { get; set; }
        public string UserRole { get; set; }
    }
}
