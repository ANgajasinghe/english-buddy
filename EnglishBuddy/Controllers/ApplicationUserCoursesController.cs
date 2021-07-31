using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using EnglishBuddy.Application.Persistence;
using EnglishBuddy.Domain.Entities;
using EnglishBuddy.Services;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace EnglishBuddy.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ApplicationUserCoursesController : ControllerBase
    {
        private readonly AppDbContext _appDbContext;
        private readonly CurrentUserService _currentUserService;

        public ApplicationUserCoursesController(CurrentUserService currentUserService, AppDbContext appDbContext)
        {
            _currentUserService = currentUserService;
            _appDbContext = appDbContext;
        }

        [HttpGet("my-courses")]
        public async Task<IActionResult> GetMyCourses(CancellationToken cancellationToken)
        {
            var res = await _appDbContext.ApplicationUserCourses
                .Include(x => x.Course)
                .Where(x => x.ApplicationUserId == _currentUserService.UserId)
                .Select(x => new
                {
                    x.Course.Id,
                    x.Course.Title,
                    x.Course.Description,
                    x.Course.IsBestSeller,
                    x.Course.ImageUrl,
                    x.Course.Rating,
                    x.Course.Difficulty
                })
                .ToListAsync(cancellationToken);

            return Ok(res);
        }
        
        [HttpGet("my-courses-intro/{id}")]
        public async Task<IActionResult> GetMyCourseIntroduction(int id, CancellationToken cancellationToken)
        {
            var res = await _appDbContext.ApplicationUserCourses
                .Include(x => x.Course)
                .Where(x => x.ApplicationUserId == _currentUserService.UserId && x.CourseId == id)
                .Select(x => new
                {
                    x.Course.Id,
                    x.Course.Title,
                    x.Course.Description,
                    x.Course.IsBestSeller,
                    x.Course.ImageUrl,
                    x.Course.Rating,
                    x.Course.Difficulty,
                    x.Course.Introduction,
                    x.IsCompletedIntroduction,
                })
                .FirstOrDefaultAsync(cancellationToken);

            return Ok(res);
        }
        
        [HttpPut("complete-intro/{id}")]
        public async Task<IActionResult> CompleteIntroduction(int id, CancellationToken cancellationToken)
        {
            var res = await _appDbContext.ApplicationUserCourses
                .Include(x => x.Course)
                .Where(x => x.ApplicationUserId == _currentUserService.UserId && x.CourseId == id)
                .FirstOrDefaultAsync(cancellationToken: cancellationToken);

            res.IsCompletedIntroduction = true;

            _appDbContext.ApplicationUserCourses.Update(res);
            await _appDbContext.SaveChangesAsync(cancellationToken);
            
            
            var result = await _appDbContext.ApplicationUserCourses
                .Include(x => x.Course)
                .Where(x => x.ApplicationUserId == _currentUserService.UserId && x.CourseId == id)
                .Select(x => new
                {
                    x.Course.Id,
                    x.Course.Title,
                    x.Course.Description,
                    x.Course.IsBestSeller,
                    x.Course.ImageUrl,
                    x.Course.Rating,
                    x.Course.Difficulty,
                    x.Course.Introduction,
                    x.IsCompletedIntroduction,
                })
                .FirstOrDefaultAsync(cancellationToken);

            return Ok(result);
            
        }
        
        
    }
}