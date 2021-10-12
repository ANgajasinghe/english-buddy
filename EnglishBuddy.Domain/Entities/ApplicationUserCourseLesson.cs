namespace EnglishBuddy.Domain.Entities
{
    public class ApplicationUserCourseLesson
    {
        public int Id { get; set; }
        public int ApplicationUserCourseId { get; set; }
        public ApplicationUserCourse ApplicationUserCourse { get; set; }
        public int LessonId { get; set; }
        public Lesson Lesson { get; set; }
    }
}