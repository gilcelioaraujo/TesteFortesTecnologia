namespace Bazar.Models;

public class Item
{
    public long Id { get; set; }
    public string Produto { get; set; } = default!;
    public decimal Valor { get; set; } = default!;
    public bool EstaDisponivel { get; set; } = default!;
    
}