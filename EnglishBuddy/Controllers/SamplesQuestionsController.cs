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
        public async Task<ActionResult<IEnumerable<SamplesQuestion>>> GetSamplesQuestions()
        {
            return await _context.SamplesQuestions.ToListAsync();
        }

        // GET: api/SamplesQuestions/5
        [HttpGet("{id}")]
        public async Task<ActionResult<SamplesQuestion>> GetSamplesQuestion(int id)
        {
            var samplesQuestion = await _context.SamplesQuestions.FindAsync(id);

            if (samplesQuestion == null) return NotFound();

            return samplesQuestion;
        }

        // PUT: api/SamplesQuestions/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutSamplesQuestion(int id, SamplesQuestion samplesQuestion)
        {
            if (id != samplesQuestion.Id) return BadRequest();

            _context.Entry(samplesQuestion).State = EntityState.Modified;

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
        public async Task<ActionResult<SamplesQuestion>> PostSamplesQuestion(SamplesQuestion samplesQuestion)
        {
            _context.SamplesQuestions.Add(samplesQuestion);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetSamplesQuestion", new {id = samplesQuestion.Id}, samplesQuestion);
        }

        // DELETE: api/SamplesQuestions/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteSamplesQuestion(int id)
        {
            var samplesQuestion = await _context.SamplesQuestions.FindAsync(id);
            if (samplesQuestion == null) return NotFound();

            _context.SamplesQuestions.Remove(samplesQuestion);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool SamplesQuestionExists(int id)
        {
            return _context.SamplesQuestions.Any(e => e.Id == id);
        }
    }
}