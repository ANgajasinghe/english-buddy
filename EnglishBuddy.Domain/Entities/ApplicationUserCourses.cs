namespace EnglishBuddy.Domain.Entities
{
    public class ApplicationUserCourse
    {
        public int Id { get; set; }
        public ApplicationUser ApplicationUser { get; set; }
        public string ApplicationUserId { get; set; }
        public Course Course { get; set; }
        public int CourseId { get; set; }

        public bool IsCompletedIntroduction { get; set; }
        public int Sate { get; set; }
        public int Result { get; set; }
    }
}