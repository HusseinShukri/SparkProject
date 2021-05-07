using System.ComponentModel.DataAnnotations;

namespace Spark.API.ViewModel.Register
{
    public class RegisterTeacherViewModel
    {
        [StringLength(30, ErrorMessage = "Max Length is {1}")]
        [Required(ErrorMessage = "The FirstName is required")]
        public string FirstName { get; set; }

        [StringLength(30, ErrorMessage = "Max Length is {1}")]
        [Required(ErrorMessage = "The LastName is required")]
        public string LastName { get; set; }

        [StringLength(30, ErrorMessage = "Max Length is {1}")]
        [Required(ErrorMessage = "The password is required")]
        public string Password { get; set; }

        [Display(Name = "Email address")]
        [Required(ErrorMessage = "The email address is required")]
        [EmailAddress(ErrorMessage = "The email address is not valid")]
        [StringLength(50, ErrorMessage = "Max Length is {1}")]
        public string Email { get; set; }
    }
}
