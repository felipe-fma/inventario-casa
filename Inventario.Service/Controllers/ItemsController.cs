using Microsoft.AspNetCore.Mvc;
using Inventario.Persistence.Repositoris;
using Inventario.Persistence.Entity;
using Inventario.Persistence;

namespace Service.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ItensController : ControllerBase
    {
        private readonly ItensRepository _repo;

        public ItensController(AppDbContext db)
        {
            _repo = new ItensRepository(db);
        }

        // GET: api/Items
        [HttpGet]
        public ActionResult<IEnumerable<Item>> GetItems()
            => _repo.GetAll();

        // GET: api/Items/5
        [HttpGet("{id}")]
        public ActionResult<Item> GetItem(int id)
        {
            var item = _repo.GetByID(id);

            if (item == null)
                return NotFound();

            return item;
        }

        // PUT: api/Items/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public IActionResult PutItem(int id, Item item)
        {
            if (id != item.Id)
                return BadRequest();
            
            try
            {
                _repo.Update(item);
                Ok();
            }
            catch 
            {
                if (!ItemExists(id))
                    return NotFound();
                else
                    throw;
            }

            return NoContent();
        }

        // POST: api/Items
        [HttpPost]
        public ActionResult<Item> PostItem(Item item)
        {
            _repo.Insert(item);
            return CreatedAtAction("GetItem", new { id = item.Id }, item);
        }

        // DELETE: api/Items/5
        [HttpDelete("{id}")]
        public IActionResult DeleteItem(int id)
        {
            if (!ItemExists(id))
                return NotFound();

            _repo.Delete(id);

            return NoContent();
        }

        private bool ItemExists(int id)
            => _repo.GetAll().Any(e => e.Id == id);
    }
}
