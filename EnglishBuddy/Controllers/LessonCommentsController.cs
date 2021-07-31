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
    public class LessonCommentsController : ControllerBase
    {
        private readonly AppDbContext _context;

        public LessonCommentsController(AppDbContext context)
        {
            _context = context;
        }

        // GET: api/LessonComments
        [HttpGet]
        public async Task<ActionResult<IEnumerable<LessonComment>>> GetLessonComments()
        {
            return await _context.LessonComments.ToListAsync();
        }

        // GET: api/LessonComments/5
        [HttpGet("{id}")]
        public async Task<ActionResult<LessonComment>> GetLessonComment(int id)
        {
            var lessonComment = await _context.LessonComments.FindAsync(id);

            if (lessonComment == null) return NotFound();

            return lessonComment;
        }

        // PUT: api/LessonComments/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutLessonComment(int id, LessonComment lessonComment)
        {
            if (id != lessonComment.Id) return BadRequest();

            _context.Entry(lessonComment).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!LessonCommentExists(id))
                    return NotFound();
                throw;
            }

            return NoContent();
        }

        // POST: api/LessonComments
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<LessonComment>> PostLessonComment(LessonComment lessonComment)
        {
            _context.LessonComments.Add(lessonComment);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetLessonComment", new {id = lessonComment.Id}, lessonComment);
        }

        // DELETE: api/LessonComments/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteLessonComment(int id)
        {
            var lessonComment = await _context.LessonComments.FindAsync(id);
            if (lessonComment == null) return NotFound();

            _context.LessonComments.Remove(lessonComment);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool LessonCommentExists(int id)
        {
            return _context.LessonComments.Any(e => e.Id == id);
        }
    }
}