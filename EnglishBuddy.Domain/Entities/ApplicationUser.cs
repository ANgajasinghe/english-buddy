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
        [Required] public string Gender { get; set; }
        [Required] public string RoleName { get; set; }
        [Required] public string ProfilePictureUrl { get; set; }
        [Required] public string Resident { get; set; }
        [Required] public string City { get; set; }
        [Required] public int Age { get; set; }
        [Required] public string Language { get; set; }
        [Required] public int Grammar { get; set; }
        [Required] public int Speaking { get; set; }
        [Required] public int Spelling { get; set; }
        [Required] public int Writing { get; set; }
        [Required] public int Rank { get; set; }
        [Required] public int Points { get; set; }
        [Required] public int CourseCount { get; set; }
        [Required] public int Coins { get; set; }

            
        private ICollection<ApplicationUserCourse> ApplicationUserCourses { get; set; }
    }
}
