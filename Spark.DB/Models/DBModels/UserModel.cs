using System;
using System.Collections.Generic;
using System.Text;

namespace Spark.DB.Models.DBModels
{
    public class UserModel : IDbModel
    {
        public string FirstName { get; set; }
        public string LastName { get; set; }

    }
}
