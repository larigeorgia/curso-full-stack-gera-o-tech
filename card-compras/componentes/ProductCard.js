export default function ProductCard (props){
    return `
    <div class="card">
    <img src="https://m.media-amazon.com/images/I/41m1oYOQiqL._AC_SX679_.jpg">
    <div>
        <h1>${props.name}</h1>
        <h2>128g | Preto</h2>
        <span>${props.preco}</span>
        <button>Comprar</button>
    </div>
    </div>`
}
