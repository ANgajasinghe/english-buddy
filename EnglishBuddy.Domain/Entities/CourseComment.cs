using EnglishBuddy.Domain.Common;

namespace EnglishBuddy.Domain.Entities
{
    public class CourseComment : AuditableEntity
    {
        public int Id { get; set; }
        public int CourseId { get; set; }
        public Course Course { get; set; }
        public string Comment { get; set; }
    }
}