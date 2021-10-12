using System.ComponentModel.DataAnnotations;
using EnglishBuddy.Domain.Common;

namespace EnglishBuddy.Domain.Entities
{
    public class Example : AbstractValidatableObject
    {
        public int Id { get; set; }

        public string Questions { get; set; }
        public string Answers { get; set; }

        public int Rating { get; set; }
    }
}