using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AG.Recommender;
using EnglishBuddy.Application.Persistence;
using EnglishBuddy.Domain.Entities;
using Microsoft.EntityFrameworkCore;

namespace EnglishBuddy.Application.Services
{
    public class UserRecommendations
    {
        private readonly AppDbContext _appDbContext;

        public UserRecommendations(AppDbContext appDbContext)
        {
            _appDbContext = appDbContext;
        }

        public int GetCurrentState(int state, int result)
        {
            return new Recommender().Run(state, result).Actions[0];
        }

        public async Task<RecommendationResponse> GetAsync(int state, int result, Course course)
        {
            try
            {
                Recommender recommender = new Recommender();
                RecommendationResponse response = new RecommendationResponse {Introduction = course.Introduction};
            
                var recommenderRes = recommender.Run(state, result);

                switch (state)
                {
                    case 0:
                        response.Message = "Hi please complete your introduction lesson and do activity 1";
                        break;
                }
                
                
            
                // can implement a algo to get average of user activities

                response.Steps = recommenderRes.Actions;
                response.TypeName = course.CourseType.Name;
                for (int i = 0; i < recommenderRes.Actions.Length; i++)
                {
                    response = GetRecommendationResponse(recommenderRes.Actions[i], course, response);
                }

                // await AddNewRecommendations(response, userCourseId);
               
            
                return response;
            }
            catch (Exception e)
            {
                Console.WriteLine(e);
                throw;
            }
            

        }
        
        private  RecommendationResponse GetRecommendationResponse(
            int state,
            Course course,
            RecommendationResponse response)
        {
           
            Random rnd = new Random();
            switch (state)
            {
                case (int)Recommender.GetAction.Activity1:
                     response.Activity1 = ((course.Activities?.ToList()) ?? throw new InvalidOperationException())
                        .FirstOrDefault(x => x.DifficultyLevel == rnd.Next(1, 2));
                     if (response.Activity1 != null) {response.Activity1.Course = null;
                         response.Activity1.State = state;
                     }
                     return response;
                    
                case (int)Recommender.GetAction.Activity2:    
                    response.Activity2 = ((course.Activities?.ToList()) ?? throw new InvalidOperationException())
                        .FirstOrDefault(x => x.DifficultyLevel == 3);
                    if (response.Activity2 != null) {response.Activity2.Course = null;
                        response.Activity2.State = state;
                    }
                    return response;

                case (int)Recommender.GetAction.Examples:
                    var randomId = new Random().Next(0,course.SamplesQuestions.Count-1);
                    if (randomId > 0)
                        response.SamplesQuestion = course.SamplesQuestions.ToList()[randomId];
                    else
                    {
                        response.SamplesQuestion = course.SamplesQuestions.FirstOrDefault() ?? new SamplesQuestion();
                    }

                    return response;
                
                case (int)Recommender.GetAction.ExtraLessons:
                    response.ExtraLesson = ((course.CourseCategory?.Lessons?.ToList()) ?? throw new InvalidOperationException())
                        .Where(x=> x.Rating == rnd.Next(1, 5))
                        .OrderByDescending(x=>x.Rating)
                        .FirstOrDefault();


                    if (response.ExtraLesson == null)
                    {
                        response.ExtraLesson = ((course.CourseCategory?.Lessons?.ToList()) ?? throw new InvalidOperationException())
                            .OrderByDescending(x=>x.Rating)
                            .FirstOrDefault() ?? new Lesson();
                    }


                    return response;
                
                 default:
                     return response;
                    
            }
        }

        // private async Task AddNewRecommendations(RecommendationResponse response, int userCourseId)
        // {
        //     if (response.Activity1 != null)
        //     {
        //       var res =  await _appDbContext.UserActivities.FirstOrDefaultAsync(x =>
        //             x.RecommendActivityId == response.Activity1.Id);
        //       
        //       if(res == null)
        //       {
        //           await _appDbContext.UserActivities
        //               .AddAsync(new UserActivity
        //               {
        //                   ApplicationUserCourseId = userCourseId,
        //                   RecommendActivityId = response.Activity1.Id
        //               });
        //       }
        //       else
        //       {
        //           res.PresentedCount += res.PresentedCount;
        //           _appDbContext.Update(res);
        //       }
        //     }
        //     
        //     if (response.Activity2 != null)
        //     {
        //         var res =  await _appDbContext.UserActivities.FirstOrDefaultAsync(x =>
        //             x.RecommendActivityId == response.Activity2.Id);
        //       
        //         if(res == null)
        //         {
        //             await _appDbContext.UserActivities
        //                 .AddAsync(new UserActivity
        //                 {
        //                     ApplicationUserCourseId = userCourseId,
        //                     RecommendActivityId = response.Activity2.Id
        //                 });
        //         }
        //         else
        //         {
        //             res.PresentedCount += res.PresentedCount;
        //             _appDbContext.Update(res);
        //         }
        //     }
        //     
        //     if (response.SamplesQuestion != null)
        //     {
        //         var res =  await _appDbContext.UserSampleQuestions
        //             .FirstOrDefaultAsync(x => x.SamplesQuestionId == response.SamplesQuestion.Id);
        //       
        //         if(res == null)
        //         {
        //             await _appDbContext.UserSampleQuestions
        //                 .AddAsync(new UserSampleQuestion
        //                 {
        //                     ApplicationUserCourseId = userCourseId,
        //                     SamplesQuestionId = response.SamplesQuestion.Id
        //                 });
        //         }
        //         else
        //         {
        //             res.PresentedCount += res.PresentedCount;
        //             _appDbContext.Update(res);
        //         }
        //     }
        //     
        //     
        //     await _appDbContext.SaveChangesAsync();
        // }

    }
    
    public class RecommendationResponse
    {
        public string Introduction { get; set; }

        public string TypeName { get; set; }
        public Activity Activity1 { get; set; }
        public Activity Activity2 { get; set; }
        public SamplesQuestion SamplesQuestion { get; set; }
        public Lesson ExtraLesson { get; set; }

        public List<Activity> Activities { get; set; }
        public List<Lesson> Lessons { get; set; }
        public List<SamplesQuestion> SampleQuestions { get; set; }

        public int[] Steps { get; set; }
        
        public string Message { get; set; }
    }
}