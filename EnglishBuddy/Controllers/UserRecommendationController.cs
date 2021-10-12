using System;
using System.Linq;
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
    public class UserRecommendationController : Controller
    {
        private readonly AppDbContext _context;
        private readonly UserRecommendations _userRecommendations;
        private readonly CurrentUserService _currentUserService;

        public UserRecommendationController(
            AppDbContext context,
            UserRecommendations userRecommendations,
            CurrentUserService currentUserService)
        {
            _context = context;
            _userRecommendations = userRecommendations;
            _currentUserService = currentUserService;
        }

        [HttpGet("lesson/{lessonId:int}")]
        public async Task<IActionResult> GetLessonRecommendations(int lessonId,[FromQuery] int status, [FromQuery] int result)
        {
            // load all lesson

            var lesson = await _context.Lessons
                .Include(c => c.Activities)
                .Include(c => c.ExtraLessons)
                .Include(c => c.SamplesQuestions)
                .Include(c=>c.Course)
                .ThenInclude(x=>x.CourseType)
                .FirstOrDefaultAsync(c=>c.Id == lessonId);

           var ret = await _userRecommendations.GetLessonRecommendation(status, result, lesson);
            
            return Ok(ret);
        }

        [HttpPost("lesson/complete/{lessonId}")]
        public async Task<IActionResult> CompleteLesson(int lessonId)
        {
            var courseId = await _context.Lessons.Where(x => x.Id == lessonId).Select(x => x.CourseId)
                .FirstOrDefaultAsync();
            var userCourse = await _context.ApplicationUserCourses
                .Where(x => x.CourseId == courseId && x.ApplicationUserId == _currentUserService.UserId)
                .FirstOrDefaultAsync();

            await _context.ApplicationUserCourseLessons.AddAsync(new ApplicationUserCourseLesson()
            {
                ApplicationUserCourseId = userCourse.Id,
                LessonId = lessonId
            });

            await _context.SaveChangesAsync();
            
            return Ok(new {courseId});

        }


        [HttpGet("{id}")]
        public async Task<IActionResult> Get(int id)
        {
            try
            {
                //
                // var appCourse = await _context.ApplicationUserCourses
                //     .Include(x => x.Course)
                //     .ThenInclude(x=>x.Activities)
                //     .Include(x => x.Course)
                //     .ThenInclude(x=>x.CourseType)
                //     .Include(x => x.Course)
                //     .ThenInclude(x=>x.SamplesQuestions)
                //     .Include(x => x.Course)
                //     .ThenInclude(x=>x.CourseCategory)
                //     .ThenInclude(x=>x.Lessons)
                //     .Where(x => x.Course.Id == id && x.ApplicationUserId == _currentUserService.UserId )
                //     .Select(x =>new{ x.Course , x.Sate , x.Result , x.Id})
                //     .FirstOrDefaultAsync();

               // var res = await _userRecommendations.GetAsync(appCourse.Sate, appCourse.Result, appCourse.Course);

                // res.Activities = await _context.UserActivities
                //     .Where(x => x.ApplicationUserCourseId == appCourse.Id)
                //     .Include(x=>x.RecommendActivity)
                //     .Select(x=> x.RecommendActivity)
                //     .ToListAsync();
                // res.SampleQuestions = await _context.UserSampleQuestions
                //     .Where(x => x.ApplicationUserCourseId == appCourse.Id)
                //     .ToListAsync();
                    // .Include(x=>x.SamplesQuestion)
                    // .Select(x=>x.SamplesQuestion)
                    // .ToListAsync();

               // res.Introduction = null;
                
                return Ok();
            }
            catch (Exception e) {
                Console.WriteLine(e);
                throw;
            }
        }
        
        
        
    }

   
}