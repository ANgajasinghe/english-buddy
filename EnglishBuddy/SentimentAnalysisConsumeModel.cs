using System;
using EnglishBuddy.ML.Models;
using Microsoft.ML;

namespace EnglishBuddy
{
    public class SentimentAnalysisConsumeModel
    {
        private static Lazy<PredictionEngine<SAModelInput, SAModelOutput>> PredictionEngine = new Lazy<PredictionEngine<SAModelInput, SAModelOutput>>(CreatePredictionEngine);

        public static SAModelOutput Predict(SAModelInput input)
        {
            SAModelOutput result = PredictionEngine.Value.Predict(input);
            return result;
        }

        public static PredictionEngine<SAModelInput, SAModelOutput> CreatePredictionEngine()
        {
            // Create new MLContext
            MLContext mlContext = new MLContext();

            // Load model & create prediction engine

            string modelPath = "ML-Models/MLModel.zip";
            ITransformer mlModel = mlContext.Model.Load(modelPath, out var modelInputSchema);
            var predEngine = mlContext.Model.CreatePredictionEngine<SAModelInput, SAModelOutput>(mlModel);

            return predEngine;
        }
    }
}