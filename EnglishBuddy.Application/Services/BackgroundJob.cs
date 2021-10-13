using System;
using System.Linq;
using System.Threading.Tasks;
using EnglishBuddy.Application.Persistence;
using Hangfire;
using Hangfire.Dashboard.Resources;
using Hangfire.Storage;
using Microsoft.EntityFrameworkCore;

namespace EnglishBuddy.Application.Services
{
    public class EBBackgroundJob
    {
        private readonly AppDbContext _appDbContext;
        private readonly IRecurringJobManager _recurringJobManager;

        public EBBackgroundJob(AppDbContext appDbContext,IRecurringJobManager recurringJobManager)
        {
            _appDbContext = appDbContext;
            _recurringJobManager = recurringJobManager;
        }


        public void StartFromApi()
        {
            Stop();
            _recurringJobManager.AddOrUpdate("Activity Sentiment Sync",() => UpdateActivitySentiment(), "*/10 * * * *");
            _recurringJobManager.AddOrUpdate("Lesson Sentiment Sentiment Sync",() => UpdateLessonSentiment(), "*/10 * * * *");
            _recurringJobManager.AddOrUpdate("Course Sentiment Sentiment Sync",() => UpdateCourseSentiment(), "*/10 * * * *");
            _recurringJobManager.AddOrUpdate("Best Seller Sync",() => UpdateCourseBestSeller(), Cron.Daily);
        }

        
        public void Stop()
        {
            using var connection = JobStorage.Current.GetConnection();
            foreach (var recurringJob in connection.GetRecurringJobs()) RecurringJob.RemoveIfExists(recurringJob.Id);
        }
        public async Task UpdateActivitySentiment()
        {
            var data = await _appDbContext.ActivityComments
                .GroupBy(x => x.ActivityId)
                .Select(x => new
                {
                    ActivityId = x.Key,
                    Average = x.Average(c => c.Sentiment)
                }).ToListAsync();

            foreach (var val in data)
            {
               var activity =  await _appDbContext.Activities.Where(c => c.Id == val.ActivityId)
                    .FirstOrDefaultAsync();

               activity.Rating = Convert.ToInt32(val.Average);

               _appDbContext.Activities.Update(activity);


            }
            await _appDbContext.SaveChangesAsync();
        }

        
        public async Task UpdateLessonSentiment()
        {
            var data = await _appDbContext.Activities
                .GroupBy(x => x.LessonId)
                .Select(x => new
                {
                    LessonId = x.Key,
                    Average = x.Average(c => c.Rating)
                }).ToListAsync();

            foreach (var val in data)
            {
                var lesson =  await _appDbContext.Lessons.Where(c => c.Id == val.LessonId)
                    .FirstOrDefaultAsync();

                lesson.Rating = Convert.ToInt32(val.Average);

                _appDbContext.Lessons.Update(lesson);


            }
            await _appDbContext.SaveChangesAsync();
        }


        public async Task UpdateCourseSentiment()
        {
            var data = await _appDbContext.Lessons
                .GroupBy(x => x.CourseId)
                .Select(x => new
                {
                    CourseId = x.Key,
                    Average = x.Average(c => c.Rating)
                }).ToListAsync();

            foreach (var val in data)
            {
                var lesson =  await _appDbContext.Courses.Where(c => c.Id == val.CourseId)
                    .FirstOrDefaultAsync();

                lesson.Rating = Convert.ToInt32(val.Average);

                _appDbContext.Courses.Update(lesson);


            }
            await _appDbContext.SaveChangesAsync();
        }

        public async Task UpdateCourseBestSeller()
        {
            var topData = await _appDbContext.Courses.Take(3)
                .OrderByDescending(x => x.Rating)
                .ToListAsync();
            
            topData.ForEach(x=>x.IsBestSeller = true);
            
            _appDbContext.Courses.UpdateRange(topData);
            await _appDbContext.SaveChangesAsync();
            
        }
    }
}