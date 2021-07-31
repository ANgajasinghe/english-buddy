using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using EnglishBuddy.Domain.Common;

namespace EnglishBuddy.Domain.Entities
{
    public class Activity : AuditableEntity
    {
        [Required] public int Id { get; set; }
        [Required] public string Title { get; set; }
        public string ModelAnswer { get; set; }
        public int WordLimit { get; set; }
        [Required] public Course Course { get; set; }
        [Required] public int CourseId { get; set; }
        public string Description { get; set; }
        public string ImageUrl { get; set; }
        [Required] public int? DifficultyLevel { get; set; }
        [Required] public int Rating { get; set; }
        
        [NotMapped] public int State { get; set; }
    }
}