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
    public class CourseCommentsController : ControllerBase
    {
        private readonly AppDbContext _context;

        public CourseCommentsController(AppDbContext context)
        {
            _context = context;
        }

        // GET: api/CourseComments
        [HttpGet]
        public async Task<ActionResult<IEnumerable<CourseComment>>> GetCourseComment()
        {
            return await _context.CourseComments.ToListAsync();
        }

        // GET: api/CourseComments/5
        [HttpGet("{id}")]
        public async Task<ActionResult<CourseComment>> GetCourseComment(int id)
        {
            var courseComment = await _context.CourseComments.FindAsync(id);

            if (courseComment == null) return NotFound();

            return courseComment;
        }

        // PUT: api/CourseComments/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutCourseComment(int id, CourseComment courseComment)
        {
            if (id != courseComment.Id) return BadRequest();

            _context.Entry(courseComment).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!CourseCommentExists(id))
                    return NotFound();
                throw;
            }

            return NoContent();
        }

        // POST: api/CourseComments
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<CourseComment>> PostCourseComment(CourseComment courseComment)
        {
            _context.CourseComments.Add(courseComment);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetCourseComment", new {id = courseComment.Id}, courseComment);
        }

        // DELETE: api/CourseComments/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteCourseComment(int id)
        {
            var courseComment = await _context.CourseComments.FindAsync(id);
            if (courseComment == null) return NotFound();

            _context.CourseComments.Remove(courseComment);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool CourseCommentExists(int id)
        {
            return _context.CourseComments.Any(e => e.Id == id);
        }
    }
}