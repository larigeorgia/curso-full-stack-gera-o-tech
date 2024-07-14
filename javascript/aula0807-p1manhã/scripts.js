


// function subtrair(num1, num2){
//     let subtrai = num1-num2;
//     return subtrai;
// }
// function dividir(num1, num2){
//     let divide = num1/num2;
//     return divide;
// }
// function multiplicar(num1,num2){
//     let multiplica = num1*num2;
//     return multiplica;
// }

// console.log(somar(num1,num2));
// console.log(subtrair(num1,num2));
// console.log(multiplicar(num1,num2));
// console.log(dividir(num1,num2));

// ----
// function calculadora(num1,num2, operacao){
//     var num1 = parseFloat(prompt("Digite o primeiro número"));
//     var num2 = parseFloat(prompt("Digite o primeiro número"));
//     var operacao = prompt("Digite a operação (soma (+), subtrair(-), dividir(/) ou multiplicar(*))");

//     switch(operacao){
//         case "+": let soma = num1+num2;
//         return ("O resultado da somatória é: "+soma);
//         break;
//         case "-" : let subtrai = num1-num2;
//         return ("O resultado da subtração é: "+subtrai);
//         break;
//         case "/" : let divide = num1/num2;
//         return ("O resultado da divisão é: "+divide);
//         break;
//         case "*" : let multiplica = num1*num2;
//         return ("O resultado da multiplicação é: "+multiplica);
//         break;
//     }


// }

// console.log(calculadora())
//----

var num1 = parseFloat(prompt("Digite o primeiro número"));
var num2 = parseFloat(prompt("Digite o primeiro número"));

function somar(nume1, nume2){
    let soma = nume1+nume2;
    return soma;
}
// let operacao = prompt("Digite a operação");

// function calculadora(num1,num2, operacao){
//     if (operacao == '1'){
//         operacao = somar(num1,num2);
//         console.log(operacao);
//     }
// }

// calculadora(num1,num2,operacao)

// let operacao = prompt("Digite a operação");

function calculadora(num1,num2, operacao){
    // if (operacao == '1'){
    //     operacao = somar(num1,num2);
    //     console.log(operacao);
    // }
    return operacao(num1,num2)
}
function somar(nume1, nume2){
    let soma = nume1+nume2;
    return soma;
}
console.log(calculadora(num1,num2,somar))