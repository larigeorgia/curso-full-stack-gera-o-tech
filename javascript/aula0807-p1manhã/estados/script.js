import ufs from './scriptsufs.js'


let tagUl = document.getElementById("lista-estados");
// tagUl.textContent = "Conteúdo de texto"

let estados = ufs[0];
let cont = 0;
interval = setInterval(function(){
    console.log(estados)
    tagUl.innerHTML += "<li>Estado:"+estados[cont].nome + ", Região: "+ estados[cont].regiao.nome+"<li/>";
},200)

setTimeout(function(){
    // if(){}
    clearTimeout(setInterval)
},10000)

tagUl.innerHTML = "<li>Estado:"+estados.nome + ", Região: "+ estados.regiao.nome+"<li/>";
console.log(tagUl)