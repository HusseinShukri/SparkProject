namespace Spark.API.ViewModel.Users
{
    public class UserEmailViewModel
    {
        [Display(Name = "Email address")]
        [Required(ErrorMessage = "The email address is required")]
        [EmailAddress(ErrorMessage = "The email address is not valid")]
        [StringLength(50, ErrorMessage = "Max Length is {1}")]
        public string Email { get; set; }
    }
}
