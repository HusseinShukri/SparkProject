using AutoMapper;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Spark.API.Controllers.ControllersHelper;
using Spark.API.ViewModel.Login;
using Spark.API.ViewModel.Register;
using Spark.DB.Models.IdentityModels;
using Spark.Domain.Dto.CreateModels;
using Spark.Services.StudentServices;
using System.Threading.Tasks;

namespace Spark.API.Controllers
{
    [Authorize]
    [ApiController]
    [Route("[controller]")]
    public class AccountController : Controller
    {
        private readonly UserManager<ApplicationUser> _userManager;
        private readonly SignInManager<ApplicationUser> _signInManager;
        private readonly IMapper _mapper;
        private readonly IStudentService _studentService;


        public AccountController(UserManager<ApplicationUser> userManager
             , SignInManager<ApplicationUser> signInManager
            , IMapper mapper,
            IStudentService studentService)
        {
            _userManager = userManager;
            _signInManager = signInManager;
            _mapper = mapper;
            _studentService = studentService;
        }


        [Route("[action]")]
        [HttpPost]
        [AllowAnonymous]
        public async Task<IActionResult> Login([FromBody] LoginViewModel model)
        {
            if (ModelState.IsValid)
            {
                if ((await _userManager.FindByEmailAsync(model.Email)) != null)
                {
                    await _signInManager.SignOutAsync();
                    var result = await _signInManager.PasswordSignInAsync(model.Email, model.Password, false, false);
                    if (result.Succeeded)
                    {

                        //user the find user method in services
                        var x = _userManager.GetUserAsync(User);
                        return Ok(x.Result);
                    }
                    else
                    {
                        return BadRequest("Field to signing ");
                    }
                }
                else
                {
                    return BadRequest("Invalid Email or password");
                }
            }
            else
            {
                return BadRequest(ModelState.GetErrors());
            }
        }

        [Route("[action]")]
        [HttpPost]
        public async Task<IActionResult> Logout()
        {
            await _signInManager.SignOutAsync();
            return Ok();
        }

        [Route("[action]")]
        [HttpPost]
        [AllowAnonymous]
        public async Task<IActionResult> RegisterStudent([FromBody] RegisterViewModel model)
        {
            if (ModelState.IsValid)
            {
                var result = await _studentService.CreateAsync(_mapper.Map<ApplicationUserCreateModel>(model));
                if (result)
                {
                    return Ok("Created");
                }
                else
                {
                    return BadRequest("Bad Inputs");
                }
            }
            else
            {
                return BadRequest(ModelState.GetErrors());
            }
        }

        [Route("[action]")]
        [HttpPost]
        [AllowAnonymous]
        public async Task<IActionResult> RegisterTeacher([FromBody] RegisterViewModel model)
        {
            if (ModelState.IsValid)
            {
                var result = await _studentService.CreateAsync(_mapper.Map<ApplicationUserCreateModel>(model));
                if (result)
                {
                    return Ok("Created");
                }
                else
                {
                    return BadRequest("Bad Inputs");
                }
            }
            else
            {
                return BadRequest(ModelState.GetErrors());
            }
        }
    }
}
