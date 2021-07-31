using System;

namespace EnglishBuddy.Domain.Common
{
    public class AuditableEntity : AbstractValidatableObject
    {
        public string CreatedUserId { get; set; }
        public string ModifiedUserId { get; set; }
        public DateTime ModifiedDate { get; set; }
        public DateTime CreatedDate { get; set; }
    }
}