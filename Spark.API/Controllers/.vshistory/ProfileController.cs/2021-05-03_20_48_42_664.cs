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
using Spark.Services.TeacherServices;
using System.Threading.Tasks;

namespace Spark.API.Controllers
{
    [Authorize]
    [ApiController]
    Route("[controller]")]
    public class ProfileController : Controller
    {
    }
}
