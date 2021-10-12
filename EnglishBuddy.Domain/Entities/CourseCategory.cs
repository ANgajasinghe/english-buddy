using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using EnglishBuddy.Domain.Common;

namespace EnglishBuddy.Domain.Entities
{
    public class CourseCategory : AuditableEntity
    {
        [Required] public int Id { get; set; }
        [Required] public string Name { get; set; }
    }
}