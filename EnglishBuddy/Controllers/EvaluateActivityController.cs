using System;
using System.Threading;
using System.Threading.Tasks;
using EnglishBuddy.Application.Persistence;
using EnglishBuddy.Application.Services;
using EnglishBuddy.Domain.Entities;
using EnglishBuddy.Services;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace EnglishBuddy.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class EvaluateActivityController : Controller
    {
        private readonly AppDbContext _appDbContext;
        private readonly UserRecommendations _userRecommendations;
        private readonly CurrentUserService _currentUserService;

        public EvaluateActivityController(AppDbContext appDbContext,
            UserRecommendations userRecommendations,
                CurrentUserService currentUserService)
        {
            _appDbContext = appDbContext;
            _userRecommendations = userRecommendations;
            _currentUserService = currentUserService;
        }

        [HttpPost]
        public async Task<IActionResult> Evaluate(EvaluateActivityFrom activityFrom,CancellationToken cancellationToken)
        {
            Random rnd = new Random();
            var res = new ActivityResult
            {
                ActivityId = activityFrom.Id,
                ApplicationUserId = _currentUserService.UserId,
                OverallScore = rnd.Next(1,10)
            };
            
            await _appDbContext.ActivityResults.AddAsync(res, cancellationToken);
            await _appDbContext.SaveChangesAsync(cancellationToken);

           var courseRes = await _appDbContext.Courses
               .Include(x=>x.Activities)
               .Include(x=>x.SamplesQuestions)
               .Include(x=>x.CourseCategory)
               .ThenInclude(x=>x.Lessons)
               .FirstOrDefaultAsync(x => x.Id == activityFrom.CourseId, cancellationToken);

          var recommendation = await _userRecommendations
              .GetAsync(activityFrom.State, (int)res.OverallScore, courseRes);

          return Ok(recommendation);


        }
    }

    public class EvaluateActivityFrom
    {
        public int Id { get; set; }
        public string Answer { get; set; }
        public int State { get; set; }

        public int CourseId { get; set; }
    }
}