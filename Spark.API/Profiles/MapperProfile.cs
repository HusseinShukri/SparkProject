using AutoMapper;
using Spark.API.ViewModel.Register;
using Spark.Domain.Dto;
using Spark.Domain.Dto.CreateModels;

namespace Spark.API.Profiles
{
    public class MapperProfile : Profile
    {
        public MapperProfile()
        {
            CreateMap<RegisterViewModel, ApplicationUserDto>()
                .ForMember(dir => dir.Email, opt => opt.MapFrom(src => src.Email))
                .ForMember(dir => dir.UserName, opt => opt.MapFrom(src => src.Email))
                .ReverseMap();

            CreateMap<RegisterViewModel, ApplicationUserCreateModel>()
                .ForMember(dir => dir.ApplicationUser, opt => opt.MapFrom((src, dest, destMember, context) => context.Mapper.Map<ApplicationUserDto>(src)))
                .ForMember(dir => dir.Password, opt => opt.MapFrom(src => src.Password))
                .ReverseMap();
        }
    }
}
