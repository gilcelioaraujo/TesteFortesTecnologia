namespace Bazar.Models;

public class Carrinho
{
    public long Id { get; set; } 
    public string NomeReserva { get; set; } = default!;
    public ICollection <Item> Itens { get; set; } = default!;
    
    
}