let carros = [
    {nome: "uno com escada em cima", velocidade: Math.random*10, distancia: 0},
    {nome: "relampago marquinhos", velocidade:  Math.random*10, distancia: 0},
    {nome: "carro do danone", velocidade:  Math.random*10, distancia: 0}
];
function start(){

    let vencedor;

    for(let index=0;index<carros.length;index++){
        let carro = carros[index];
        carro.distancia += carro.velocidade;
        if(!vencedor && carro.distancia>=200){
            vencedor = carro.nome;
            break;
        }
    }

    if(vencedor) {
        clearInterval(intervalo)
        console.log("Carro "+vencedor+" ganhou")
    }
}
var intervalo = setInterval(start, 2000)
