using System.ComponentModel.DataAnnotations;


namespace EnglishBuddy.Domain.Entities
{
    
    public class UserLesson
    {
        public int Id { get; set; }
        [Required] public ApplicationUserCourse ApplicationUserCourse { get; set; }
        public int ApplicationUserCourseId { get; set; }
        // [Required] public Lesson RecommendLesson { get; set; }
        public int RecommendLessonId { get; set; }

        public int LastResult { get; set; }
        public int PresentedCount { get; set; }
    }

    public class UserActivity
    {
        public int Id { get; set; }
       // [Required] public ApplicationUserCourse ApplicationUserCourse { get; set; }
        public int ApplicationUserCourseId { get; set; }
        
        [Required] public Activity RecommendActivity { get; set; }
        [Required] public int RecommendActivityId { get; set; }

        public int LastResult { get; set; }
        public int PresentedCount { get; set; }
    }

    public class UserSampleQuestion
    {
        public int Id { get; set; }
        [Required] public ApplicationUserCourse ApplicationUserCourse { get; set; }
        public int ApplicationUserCourseId { get; set; }
        // [Required] public SamplesQuestion SamplesQuestion { get; set; }
        public int SamplesQuestionId { get; set; }
        
        public int LastResult { get; set; }
        public int PresentedCount { get; set; }
    }
}