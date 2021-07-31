using System;
using System.Threading.Tasks;
using EnglishBuddy.ML.Models;
using Microsoft.AspNetCore.SignalR;

namespace EnglishBuddy.Hubs
{
    public interface ICommentNotification
    {
        Task NotifyResult(SAModelOutput output);
    }

    public class CommentNotification : Hub<ICommentNotification>
    {
        public async Task SendComment(string comment)
        {
            try
            {
                SAModelInput sampleData = new SAModelInput()
                {
                    Review = comment
                };

                var predictionResult = SentimentAnalysisConsumeModel.Predict(sampleData);
                
                await Clients.All.NotifyResult(predictionResult);
            }
            catch (Exception e)
            {
                Console.WriteLine(e);
                throw;
            }
            // await Clients.All.NotifyResult(predictionResult);
        }
    }
}