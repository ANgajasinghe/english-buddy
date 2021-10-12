using System.Collections.Generic;
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
    public class ActivityResultsController : ControllerBase
    {
        private readonly AppDbContext _context;
        private readonly CurrentUserService _currentUserService;
        private readonly UserRecommendations _userRecommendations;

        public ActivityResultsController(AppDbContext context, CurrentUserService currentUserService, UserRecommendations userRecommendations)
        {
            _context = context;
            _currentUserService = currentUserService;
            _userRecommendations = userRecommendations;
        }

        // GET: api/ActivityResults
        [HttpGet]
        public async Task<ActionResult<IEnumerable<ActivityResult>>> GetActivityResults()
        {
            return await _context.ActivityResults.ToListAsync();
        }

        // GET: api/ActivityResults/5
        [HttpGet("{id}")]
        public async Task<ActionResult<ActivityResult>> GetActivityResult(int id)
        {
            var activityResult = await _context.ActivityResults.FindAsync(id);

            if (activityResult == null) return NotFound();

            return activityResult;
        }

        // PUT: api/ActivityResults/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutActivityResult(int id, ActivityResult activityResult)
        {
            if (id != activityResult.Id) return BadRequest();

            _context.Entry(activityResult).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!ActivityResultExists(id))
                    return NotFound();
                throw;
            }

            return NoContent();
        }

        // POST: api/ActivityResults
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost("{state}")]
        public async Task<ActionResult<ActivityResult>> PostActivityResult(int state, ActivityResult activityResult)
        {
            _context.ActivityResults.Add(activityResult);
            await _context.SaveChangesAsync();

            // var courseId = await _context.Activities
            //     .Where(x => x.Id == activityResult.ActivityId)
            //     .Select(x => x.CourseId)
            //     .FirstOrDefaultAsync();

            // var applicationUserCourse = await _context.ApplicationUserCourses
            //     .Where(x => x.ApplicationUserId == _currentUserService.UserId && x.CourseId == courseId)
            //     .FirstOrDefaultAsync();
            //
            // applicationUserCourse.Sate = state;
            // applicationUserCourse.Result = activityResult.OverallScore;

            //_context.ApplicationUserCourses.Update(applicationUserCourse);
            //await _context.SaveChangesAsync();

            return Ok();
        }

        // DELETE: api/ActivityResults/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteActivityResult(int id)
        {
            var activityResult = await _context.ActivityResults.FindAsync(id);
            if (activityResult == null) return NotFound();

            _context.ActivityResults.Remove(activityResult);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool ActivityResultExists(int id)
        {
            return _context.ActivityResults.Any(e => e.Id == id);
        }
    }
}