using AutoMapper;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Spark.Services.TeacherServices;

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
            this._teaherService = teaherService;
        }
    }
}
