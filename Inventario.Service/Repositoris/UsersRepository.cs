using Inventario.Service.Entity;

namespace Inventario.Service.Repositoris;

public class UsersRepository
{
    readonly AppDbContext _db;

    public UsersRepository(AppDbContext db)
    {
        _db = db;
    }
    public List<User> GetAll() =>
        _db.Users.ToList();

    public User GetByID(int Id) =>
        _db.Users.Where(x=>x.Id == Id).First();

    public User Insert(User user)
    {
        user.CreatedUtc = DateTime.Now;
        _db.Add(user);
        _db.SaveChanges();
        return user;
    }

    public User Update(User userNew)
    {
        var userOld = GetByID(userNew.Id);
        
        userOld.Name = userNew.Name;
        userOld.Login = userNew.Login;
        userOld.Password = userNew.Password;
        userOld.Email = userNew.Email;
        userOld.CreatedUtc = DateTime.Now;

        _db.SaveChanges();
        return userOld;
    }

    public void Delete(int Id)
    {
        _db.Remove(GetByID(Id));
        _db.SaveChanges();
    }
}    