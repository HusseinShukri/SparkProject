using System;
using System.Collections.Generic;
using System.Text;

namespace Spark.Domain.Dto
{
    public class BasicUserinfo
    {
        public string UserName { get; set; }
        public string Id { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public byte[] ProfilePicture { get; set; }
    }
}
