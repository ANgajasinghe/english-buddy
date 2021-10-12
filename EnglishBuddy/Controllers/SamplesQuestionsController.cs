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
    public class SamplesQuestionsController : ControllerBase
    {
        private readonly AppDbContext _context;

        public SamplesQuestionsController(AppDbContext context)
        {
            _context = context;
        }

        // GET: api/SamplesQuestions
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Example>>> GetSamplesQuestions()
        {
            return await _context.Examples.ToListAsync();
        }

        // GET: api/SamplesQuestions/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Example>> GetSamplesQuestion(int id)
        {
            var samplesQuestion = await _context.Examples.FindAsync(id);

            if (samplesQuestion == null) return NotFound();

            return samplesQuestion;
        }

        // PUT: api/SamplesQuestions/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutSamplesQuestion(int id, Example example)
        {
            if (id != example.Id) return BadRequest();

            _context.Entry(example).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!SamplesQuestionExists(id))
                    return NotFound();
                throw;
            }

            return NoContent();
        }

        // POST: api/SamplesQuestions
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<Example>> PostSamplesQuestion(Example example)
        {
            _context.Examples.Add(example);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetSamplesQuestion", new {id = example.Id}, example);
        }

        // DELETE: api/SamplesQuestions/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteSamplesQuestion(int id)
        {
            var samplesQuestion = await _context.Examples.FindAsync(id);
            if (samplesQuestion == null) return NotFound();

            _context.Examples.Remove(samplesQuestion);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool SamplesQuestionExists(int id)
        {
            return _context.Examples.Any(e => e.Id == id);
        }
    }
}