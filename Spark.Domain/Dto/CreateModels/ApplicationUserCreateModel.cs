namespace Spark.Domain.Dto.CreateModels
{
    public  class ApplicationUserCreateModel
    {
        public ApplicationUserDto ApplicationUser { get; set; }
        public string Password { get; set; }
        public string UserRole { get; set; }
    }
}
