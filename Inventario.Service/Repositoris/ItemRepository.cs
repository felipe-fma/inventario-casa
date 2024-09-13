using Inventario.Persistence.Entity;

namespace Inventario.Persistence.Repositoris;

public class ItensRepository
{
    readonly AppDbContext _db;

    public ItensRepository(AppDbContext db)
    {
        _db = db;
    }
    public List<Item> GetAll() =>
        _db.Items.ToList();

    public Item GetByID(int Id) =>
        _db.Items.Where(x=>x.Id == Id).First();

    public Item Insert(Item item)
    {
        item.CreatedUtc = DateTime.Now;
        _db.Add(item);
        _db.SaveChanges();
        return item;
    }

    public Item Update(Item itemNew)
    {
        var itemOld = GetByID(itemNew.Id);
        
        itemOld.Name = itemNew.Name;
        itemOld.Categoric = itemNew.Categoric;
        itemOld.MinimalAmount = itemNew.MinimalAmount;
        itemOld.Amount = itemNew.Amount;
        itemOld.CreatedUtc = DateTime.Now;

        _db.SaveChanges();
        return itemOld;
    }

    public void Delete(int Id)
    {
        _db.Remove(GetByID(Id));
        _db.SaveChanges();
    }
}    