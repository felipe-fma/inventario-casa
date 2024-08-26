namespace Inventario.Persistence.Entity;

public class Item
{
    public int Id { get; set; }
    public string Name { get; set; }
    public string Categoric { get; set; }
    public DateTime CreatedUtc { get; set; }
}