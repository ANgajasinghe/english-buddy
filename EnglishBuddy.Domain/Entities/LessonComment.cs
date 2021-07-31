namespace EnglishBuddy.Domain.Entities
{
    public class LessonComment
    {
        public int Id { get; set; }
        public int LessonId { get; set; }
        public Lesson Lesson { get; set; }
        public string Comment { get; set; }
    }
}