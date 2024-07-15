import ProductCard from "./componentes/ProductCard.js";

let productList = document.getElementById('lista-produtos')

let produto = [
    {
        name: "Iphone 14",
        preco: "R$ 3.990,00"
    },
    {
        name: "Nokia",
        preco: "R$ 3.990,00"
    }
    
    
]

for(let i =0; i<produto.length;i++){
    console.log(i)
    productList.innerHTML += ProductCard(produto[i]);
}

