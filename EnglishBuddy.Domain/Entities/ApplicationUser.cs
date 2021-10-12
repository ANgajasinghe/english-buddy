using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using EnglishBuddy.Domain.Common;

namespace EnglishBuddy.Domain.Entities
{
    public class ApplicationUser : AuditableEntity
    {
        [Key] public string Id { get; set; }
        [Required] public string Email { get; set; }
        [Required] public string Password { get; set; }
        [Required] public string FirstName { get; set; }
        [Required] public string LastName { get; set; }
         public string Gender { get; set; }
        [Required] public string RoleName { get; set; }
        [Required] public string ProfilePictureUrl { get; set; }
         public string Resident { get; set; }
         public string City { get; set; }
         public int Age { get; set; }
         public string Language { get; set; }
         public int Grammar { get; set; }
         public int Speaking { get; set; }
         public int Spelling { get; set; }
         public int Writing { get; set; }
         public int Rank { get; set; }
         public int Points { get; set; }
         public int CourseCount { get; set; }
         public int Coins { get; set; }

            
        private ICollection<ApplicationUserCourse> ApplicationUserCourses { get; set; }
    }
}
