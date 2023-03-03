using Microsoft.EntityFrameworkCore;

namespace Bazar.Models;

public class BazarContext : DbContext
{
    public BazarContext(DbContextOptions<BazarContext> options)
        : base(options)
    {
    }

    public DbSet<Item> Items { get; set; } = null!;
    public DbSet<Carrinho> Carrinhos { get; set; } = null!;
}