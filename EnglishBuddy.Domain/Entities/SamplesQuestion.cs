using System.ComponentModel.DataAnnotations;
using EnglishBuddy.Domain.Common;

namespace EnglishBuddy.Domain.Entities
{
    public class SamplesQuestion : AbstractValidatableObject
    {
        public int Id { get; set; }
        public Course Course { get; set; }
        [Required] public int? CourseId { get; set; }

        public string Questions { get; set; }
        public string Answers { get; set; }

        public float Rating { get; set; }
    }
}