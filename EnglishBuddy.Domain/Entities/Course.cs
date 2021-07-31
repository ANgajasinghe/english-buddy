using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using EnglishBuddy.Domain.Common;

namespace EnglishBuddy.Domain.Entities
{
    public class Course : AuditableEntity
    {
        [Key] public int Id { get; set; }
        [Required] public string Title { get; set; }
        [Required] public string Introduction { get; set; }
        [Required] public string Description { get; set; }
        [Required] public string Difficulty { get; set; }
        [Required] public bool IsBestSeller { get; set; }
        [Required] public int? CourseCategoryId { get; set; }
        public CourseCategory CourseCategory { get; set; }
        public CourseType CourseType { get; set; }
        public string ImageUrl { get; set; }
        public float Rating { get; set; }
        
        public ICollection<SamplesQuestion> SamplesQuestions { get; set; }
        public ICollection<Activity> Activities { get; set; }
    }
}
