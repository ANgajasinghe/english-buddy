using System.ComponentModel.DataAnnotations;


namespace EnglishBuddy.Domain.Entities
{
    public class CourseType
    {
        [Required] public int Id { get; set; }
        [Required] public string Name { get; set; }
    }
}
