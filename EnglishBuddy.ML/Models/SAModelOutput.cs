using Microsoft.ML.Data;

namespace EnglishBuddy.ML.Models
{
    public class SAModelOutput
    {
        // ColumnName attribute is used to change the column name from
        // its default value, which is the name of the field.
        [ColumnName("PredictedLabel")] public int Prediction { get; set; }

        public float[] Score { get; set; }
    }
}