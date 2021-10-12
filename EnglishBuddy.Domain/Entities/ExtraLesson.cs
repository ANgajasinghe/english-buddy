using System.ComponentModel.DataAnnotations;
using EnglishBuddy.Domain.Common;

namespace EnglishBuddy.Domain.Entities
{
    public class ExtraLesson : AuditableEntity
    {
        public int Id { get; set; }
        public int LessonId { get; set; }
        public Lesson Lesson{ get; set; }
        [Required] public string Title { get; set; }
        [Required] public string Html { get; set; }
        public int Rating { get; set; }
    }
}