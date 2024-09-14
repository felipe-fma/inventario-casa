using Microsoft.EntityFrameworkCore;
using Inventario.Service.Entity;

namespace Inventario.Service.Repositoris;

public class AppDbContext : DbContext
{
    public DbSet<Item> Items { get; set; }
    public DbSet<User> Users { get; set; }
    public string DbPath { get; }

    public AppDbContext(DbContextOptions<AppDbContext> options) : base(options)
    {

    }

    //protected override void OnConfiguring(DbContextOptionsBuilder options)
      //  => options.UseSqlite(Environment.GetEnvironmentVariable("ConnectionStrings__DefaultConnection"));
        //=> options.UseSqlServer("Server=localhost,1200;User Id=sa;Password=Inventario21");
        //=> options.UseSqlServer(Environment.GetEnvironmentVariable("ConnectionStrings__DefaultConnection"));

    //docker run --cap-add SYS_PTRACE -e 'ACCEPT_EULA=1' -e 'MSSQL_SA_PASSWORD=Inventario21' -p 1200:1433 --name azuresqledge -d mcr.microsoft.com/azure-sql-edge

}