using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using EnglishBuddy.Application.Persistence;
using EnglishBuddy.Domain.Entities;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace EnglishBuddy.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ActivityCommentController : ControllerBase
    {
        private readonly AppDbContext _context;

        public ActivityCommentController(AppDbContext context)
        {
            _context = context;
        }

        // GET: api/ActivityComments
        [HttpGet]
        public async Task<ActionResult<IEnumerable<ActivityComment>>> GetActivityComments()
        {
            return await _context.ActivityComments.ToListAsync();
        }

        // GET: api/ActivityComments/5
        [HttpGet("{id}")]
        public async Task<ActionResult<ActivityComment>> GetActivity(int id)
        {
            var activity = await _context.ActivityComments.FindAsync(id);

            if (activity == null) return NotFound();

            return activity;
        }

        // PUT: api/ActivityComments/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutActivity(int id, ActivityComment activity)
        {
            if (id != activity.Id) return BadRequest();

            _context.Entry(activity).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!ActivityExists(id))
                    return NotFound();
                throw;
            }

            return NoContent();
        }

        // POST: api/ActivityComments
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<ActivityComment>> PostActivity(ActivityComment activity)
        {
            _context.ActivityComments.Add(activity);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetActivity", new { id = activity.Id }, activity);
        }

        // DELETE: api/ActivityComments/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteActivity(int id)
        {
            var activity = await _context.ActivityComments.FindAsync(id);
            if (activity == null) return NotFound();

            _context.ActivityComments.Remove(activity);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool ActivityExists(int id)
        {
            return _context.ActivityComments.Any(e => e.Id == id);
        }
    }
}