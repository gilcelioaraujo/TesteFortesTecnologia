import React, { useState } from "react";
<div className="page">
</div>

interface IVenda{
    id: number;
    produto: string;
    valor: number;
}

interface IBazarItem{
    objeto: IVenda;
    quantidade: number;
}

const vendas: IVenda[] = [
    {id:1, produto: "Cama", valor: 200.15},
    {id:2, produto: "TV", valor: 1000.75},
    {id:3, produto: "Mesa", valor: 100.55},
    {id:4, produto: "Sofá", valor: 300.45},
    {id:5, produto: "Cadeiras", valor: 300.25},
    {id:6, produto: "Armario", valor: 500.95},
];

export const BazarPages = () => {
    const [bazar,setBazar] = useState<IBazarItem[]>([]);

    const handleAdicionarCarrinho = (id:number) => {
        const venda = vendas.find((venda) => venda.id===id);
        const alreadyBazar = bazar.find(
            (item) =>item.objeto.id ===id
            );
        // se o produto ja existir
        if(alreadyBazar){
            const newBazar: IBazarItem[] = bazar.map((item) =>{
                if(item.objeto.id === id)
                ({
                    ...item,
                    quantidade: item.quantidade++,
                });
                return item;
            });
            setBazar(newBazar);
            return; 
        } 
        // se o produto não existir
    const vendaItem: IBazarItem = {
        objeto: venda!,
        quantidade:1,
    };
    const newBazar: IBazarItem[] = [...bazar,vendaItem];
    setBazar(newBazar);
};
const handleRemoverCarrinho = (id: number) => {
    const alreadyBazar = bazar.find(
        (item) =>item.objeto.id ===id
        );

        if(alreadyBazar!.quantidade > 1){
            const newBazar: IBazarItem[] = bazar.map(
                (item) =>{
                    if(item.objeto.id === id)
                    ({
                        ...item,
                        quantidade: item.quantidade--,
                    });
                    return item;
                }
            );
            setBazar(newBazar);  
            return
        }
    //se exixtir apenas um item com id
    const newBazar: IBazarItem[] = bazar.filter(item => item.objeto.id !== id)
    setBazar(newBazar);   
};  

const handleLimparCarrinho = () => {
    setBazar([]); 
}

const totalVendas = bazar.reduce((total,current) =>{
    return total + (current.objeto.valor * current.quantidade);
},0)

    return (
       <>
        <div>
            <h1>Bazar de Vendas</h1>
            
            {vendas.map((venda) =>(
                    
                    // eslint-disable-next-line react/jsx-key
                <>
                        <div>{venda.produto} - R$ {venda.valor}</div>
                        <button onClick={()=>handleAdicionarCarrinho(venda.id)}>Adicionar ao carrinho</button>                        
                        <p></p>
                        </>   
                ))}
            
           
            <h2>Carrinho de Compras - (R$ {totalVendas})</h2>
            <button onClick={handleLimparCarrinho}>Limpar Carrinho</button>
            <ul>
                {bazar.map((item) =>(
                    
                    // eslint-disable-next-line react/jsx-key
                    <li>
                        <p>Produto:{item.objeto.produto} - Valor: R$ {item.objeto.valor} - Quantidade:{item.quantidade}</p>
                        <p><b>Total:R$ {item.quantidade*item.objeto.valor}</b></p>
                        <button onClick={()=>handleRemoverCarrinho(item.objeto.id)}>Remover do carrinho</button>
                    </li>
                ))}
            </ul>
    </div>
    </>
    );
};
