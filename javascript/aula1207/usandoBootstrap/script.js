const pessoas = 'https://randomuser.me/api/?results=10'; //passar a quantidade de resultados que eu quero

async function fetchPessoas(){
    const response = await fetch(pessoas)
    const data = await response.json()

    let tagCardUsuario = document.getElementById('card-usuario');
    // let tagNome = document.getElementById('name');
    // let tagImg = document.getElementById('img');
    // let tagEmail = document.getElementById('email');
    // let tagTel = document.getElementById('tel');
    // let tagLocal = document.getElementById('local');

    // data.results.length - usar isso no segundo parâmetro do for
    for (let i= 0; i<data.results.length;i++){
        for(let i = 0; i < 1; i++){
            tagCardUsuario.innerHTML += `<div class="card mb-3" style="max-width: 540px;">
            <div class="row row-cols-3 row-cols-md-2 g-4">
            <div class="col-md-4">
            <div id="img" class="img-fluid rounded-start" alt="imagem de uma pessoa">
            <img src= ${data.results[i].picture.large}>
            </div>
            </div>
            <div class="col-md-8">
            <div class="card-body">
            <div id="name" class="card-title" ><p><strong>Nome:</strong> ${data.results[i].name.first}</p></div>
            <div id="email" class="card-text"><p><strong>E-mail:</strong> ${data.results[i].email}</p></div>
            <div id="tel" class="card-text"><p><strong>Telefone:</strong> ${data.results[i].cell}</p></div>    
            <div id="local" class="card-text"><p><strong>Local:</strong> ${data.results[i].location.country}</p></div>
            </div>
            </div>
            </div>       
            </div>`   

        }
    }
}

fetchPessoas()
