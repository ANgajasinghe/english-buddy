using System.ComponentModel.DataAnnotations;
using EnglishBuddy.Domain.Common;

namespace EnglishBuddy.Domain.Entities
{
    public class Lesson : AuditableEntity
    {
        public int Id { get; set; }
        [Required] public int? CourseCategoryId { get; set; }
        public CourseCategory CourseCategory { get; set; }
        [Required] public string Title { get; set; }
        [Required] public string Html { get; set; }
        [Required] public int Type { get; set; }

        public int Rating { get; set; }
    }
}