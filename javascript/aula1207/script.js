// header('Access-Control-Allow-Origin: http://127.0.0.1:5500')
Headers('Access-Control-Allow-Origin: http://127.0.0.1:5500')

let cep = document.getElementById('novoCep');
const enderecos =`https://viacep.com.br/ws/${cep}/json/`;

let tagCardEndereco = document.getElementById('endereco');

async function listaPessoas(){
    let response = await fetch(enderecos)
    let dados = await response.json()
    console.log(dados)
}

if(cep==Number && cep != undefined){
    for(let i =0;i=1;i++){
        if(cep==dados[i].cep){
            tagCardEndereco.innerHTML += `<div><p>Rua ${dados[i].logradouro}</p></div>
            <div><p>Bairro ${dados[i].bairro}</p></div>
            <div><p>Cidade ${dados[i].localidade}</p></div>
            <div><p>Estado ${dados[i].uf}</p></div>`
        }
        console.log("Cep inválido")
    
    }  
 
}
// async function listaPessoas(){
//     let response = await fetch(enderecos)
//     let dados = await response.json()
//     console.log(dados)
    

// // for(let i =0;i=1;i++){
// //     if(cep==dados[i].cep){
// //         tagCardEndereco.innerHTML += `<div><p>Rua ${dados[i].logradouro}</p></div>
// //         <div><p>Bairro ${dados[i].bairro}</p></div>
// //         <div><p>Cidade ${dados[i].localidade}</p></div>
// //         <div><p>Estado ${dados[i].uf}</p></div>`
// //     }
// //     console.log("Cep inválido")

// // }  
// }

listaPessoas()