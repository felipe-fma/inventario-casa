using Microsoft.AspNetCore.Mvc;
using Inventario.Service.Repositoris;
using Inventario.Service.Entity;

namespace Inventario.Service.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserController : ControllerBase
    {
        private readonly UsersRepository _repo;

        public UserController(AppDbContext db)
        {
            _repo = new UsersRepository(db);
        }

        // GET: api/Items/5
        [HttpGet("{id}")]
        public ActionResult<User> GetItem(int id)
        {
            var item = _repo.GetByID(id);

            if (item == null)
                return NotFound();

            return item;
        }

        // POST: api/Items
        [HttpPost]
        public ActionResult<User> PostItem(User user)
        {
            _repo.Insert(user);
            return CreatedAtAction("GetItem", new { id = user.Id }, user);
        }
    }
}
