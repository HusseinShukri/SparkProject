using AutoMapper;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Spark.Services.TeacherServices;
using System.Threading.Tasks;

namespace Spark.API.Controllers
{
    [Authorize]
    [ApiController]
    [Route("[controller]")]
    public class TeacherController : Controller
    {
        private readonly IMapper _mapper;
        private readonly ITeaherService _teaherService;

        public TeacherController(IMapper mapper, ITeaherService teaherService)
        {
            _mapper = mapper;
            _teaherService = teaherService;
        }


        public async Task<IActionResult> getAllTeachers() {


            return null;
        }
    }
}
