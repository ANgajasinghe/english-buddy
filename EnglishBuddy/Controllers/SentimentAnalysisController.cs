using EnglishBuddy.ML;
using EnglishBuddy.ML.Models;
using Microsoft.AspNetCore.Mvc;

namespace EnglishBuddy.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class SentimentAnalysisController : ControllerBase
    {
        
        [HttpGet("{comment}")]
        public IActionResult GetSentimentAnalysis(string comment)
        {
            SAModelInput sampleData = new SAModelInput()
            {
                Review = comment
            };

            var predictionResult = SentimentAnalysisConsumeModel.Predict(sampleData);
            return Ok(predictionResult);
        }
        
        
        [HttpGet("model/build")]
        public IActionResult Create()
        {
            SentimentAnalysisModelBuilder.CreateModel();
            return Ok();
        }
    }
}