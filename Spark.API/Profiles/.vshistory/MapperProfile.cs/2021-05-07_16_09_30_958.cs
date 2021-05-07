using AutoMapper;
using Spark.API.ViewModel.Login;
using Spark.API.ViewModel.Register;
using Spark.DB.Models.IdentityModels;
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

            CreateMap<RegisterViewModel, ApplicationUserCreateModel>()
                .ForMember(dir => dir.ApplicationUser, opt => opt.MapFrom((src, dest, destMember, context) => context.Mapper.Map<ApplicationUserDto>(src)))
                .ForMember(dir => dir.Password, opt => opt.MapFrom(src => src.Password))
                .ReverseMap();

            CreateMap<UserInitInfo, ApplicationUser>()
                .ForMember(dir => dir.Id, opt => opt.MapFrom(src => src.UserId))
                .ForMember(dir => dir.FirstName, opt => opt.MapFrom(src => src.FirstName))
                .ForMember(dir => dir.LastName, opt => opt.MapFrom(src => src.LastName))
                .ForMember(dir => dir.Email, opt => opt.MapFrom(src => src.UserEmail))
                .ReverseMap();

        }
    }
}
