using Microsoft.ML.Data;

namespace EnglishBuddy.ML.Models
{
    public class SAModelInput
    {
        [ColumnName("Id")] [LoadColumn(0)] public float Id { get; set; }

        [ColumnName("Review")] [LoadColumn(1)] public string Review { get; set; }

        [ColumnName("Label")] [LoadColumn(2)] public int Label { get; set; }
    }
}