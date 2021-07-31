using System.ComponentModel.DataAnnotations;

namespace EnglishBuddy.Domain.Entities
{
    public class ActivityResult
    {
        public int Id { get; set; }

        [Required] public string ApplicationUserId { get; set; }
        public ApplicationUser ApplicationUser { get; set; }

        [Required] public int? ActivityId { get; set; }
        public Activity Activity { get; set; }

        public string StudentAnswer { get; set; }
        public string ModelAnswer { get; set; }
        public int WordCount { get; set; }
        public string SpellingGrammarMistakes { get; set; }
        public string Suggestions { get; set; }
        public double Ratio { get; set; }
        public double SpellingScore { get; set; }
        public double GrammarScore { get; set; }
        public double ObjectivityScore { get; set; }
        public double PolarityScore { get; set; }
        public double SubjectivityScore { get; set; }
        public double SimilarityScore { get; set; }
        public double ComprehensivenessScore { get; set; }
        public int EssayScore { get; set; }
        public int OverallScore { get; set; }

        // Spaking Activity Evaluation Metrics
        public double SpeakingRate { get; set; }
        public double ArticulationRate { get; set; }
        public double PronunciationLevel { get; set; }
        public string MispronouncedWords { get; set; }
        public string MispronouncedPhonemes { get; set; }
    }
}
