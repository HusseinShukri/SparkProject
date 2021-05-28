namespace Spark.Services.AccountServices
{
    public class AccountServices : IAccountServices
    {


        public StudentService(IAplicationUserRepository aplicationUserRepository, IMapper mapper)
        {
            _aplicationUserRepository = aplicationUserRepository;
            _mapper = mapper;
        }
    }
}
