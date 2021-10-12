using EnglishBuddy.Domain.Common;

namespace EnglishBuddy.Domain.Entities
{
    public class ActivityComment : AuditableEntity
    {
        public int Id { get; set; }
        public int ActivityId { get; set; }
        public Activity Activity { get; set; }
        public string Comment { get; set; }
        public int Sentiment { get; set; }
    }
}