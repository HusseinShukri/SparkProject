using AutoMapper;
using Spark.DB.Models.IdentityModels;
using Spark.Domain.Dto;

namespace Spark.DB.Profiles
{
    public class MapperProfile : Profile
    {
        public MapperProfile()
        {
            CreateMap<ApplicationUser, ApplicationUserDto>()
                .ReverseMap();

            CreateMap<ApplicationUser,BasicUserinfo>()
                .ReverseMap();
        }
    }
}
