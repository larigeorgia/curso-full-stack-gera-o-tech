// //1 Criar uma lista de e-mails falsos 
// //2 Criar uma lista de senhas falsas
// //3 Receber e-mail e senha por prompt
// //4 Verificar se o e-mail existe dentro da lista de e-mails
// //5 Verificar se a senha existe dentro da lista de senhas
// //6 Enquanto o e-mail ou senha estiver errado ficar solicitando o prompt novamente 


// let emails = ["margo@gmail.com", "abobrinha@gmail.com", "macarrao@gmail.com"];
// let senhas = [123,456,789];

// let emailUser = prompt("Digite seu e-mail: ");
// let senhaUser ;
// let validacao ;

// // for (let i = 0; i<emails.length; i++){
// //     console.log(emails[i]);
// //     validacao = emails[i] == emailUser;  
// // }

// // for (let i =0; i==0;){
// //     console.log(emails[i]);
// //     console.log(senhas[i]);
// //     break
// // }


// for (let i = 0; i == 0;){
//     console.log(emails[i]);
//     console.log(emailUser);
//     if (emails[i] == emailUser){
//         console.log("O e-mail é: "+emails[i]);
//         senhaUser = prompt("Digite sua senha: ");
//     }else{
//         emailUser = prompt("Digite seu e-mail: ");
//     }
//     break;
// }
// for(let i = 0; i == 0;){
//     if(senhas[i] == senhaUser){
//         console.log("Usuário logado");
//     }else{
//         console.log("aqqui");
//     }
//     break;
// }


// for (let i = 0; i == 0;){
//     console.log(emails[i]);
//     console.log(emailUser);
//     if (emails[i] != emailUser){
//         console.log("O e-mail é: "+emails[i]);
//     }else{
//         senhaUser = prompt("Digite sua senha: ");
//     }
//     break;
// }
// for(let i = 0; i == 0;){
//     if(senhas[i] == senhaUser){
//         console.log("Usuário logado");
//     }else{
//         console.log("aqqui");
//     }
//     break;
// }



// for (let i = 0; i<senhas.length; i++){
//     console.log(senhas[i]);
//     validacao = senhas[i] ==senhaUser;
//     console.log("Usuário logado")
// }

// i ==  emailUser

// if (emailUser==emails[index] && senhaUser==senhas[index]){

// // }
let emails = ["margo@gmail.com", "abobrinha@gmail.com", "macarrao@gmail.com"];
let senhas = [123,456,789];
let emailUser = prompt("Digite seu e-mail: ")
let senhasUser = prompt("Digite sua senha: ")

let controleEmail;
let controleSenha;
let cont = true; 

// // for (let i = 0; i<emails.length;i++){
//     do {
//         for (let i = 0; i<=emails.length;i++){
//             if (emails[i] == emailUser){
//                 controleEmail= i;
//             }
//         }
//         for (let i = 0; i<=senhas.length;i++){
//             if (senhas[i] == senhasUser){
//                 controleSenha= i;
//             }
//         }
//         if(controleEmail==controleSenha){
//             console.log("Usuário Logado")
//             controle = false;
//         }else{
//             console.log("Usuário inválido!")
//             emailUser = prompt("Digite seu e-mail: ")
//             senhasUser = prompt("Digite sua senha: ")
//            // controle = false;
//         }
//     } while (cont);
// // }

// while(controle==true){
//     for (let i = 0; i<=emails.length;){
//         if (emails[i] == emailUser){
//             console.log(controleEmail= i);
//         }
//     }
// }

// for (let i = 0; i == 0;){
//     for (let i = 0; i<=emails.length;i++){
//         if (emails[i] == emailUser){
//             controleEmail= i;
//         }
//     }
//     for (let i = 0; i<=senhas.length;i++){
//         if (senhas[i] == senhasUser){
//             controleSenha= i;
//         }
//     }
//     if(controleEmail==controleSenha){
//         console.log("Usuário Logado")
//     }else{
//         console.log("Usuário inválido!")
//         emailUser = prompt("Digite seu e-mail: ")
//         senhasUser = prompt("Digite sua senha: ")
//     }
//     i++;
// }

while(cont){
    emailUser = prompt("Digite seu e-mail: ")
    senhasUser = prompt("Digite sua senha: ")
    for (let i = 0; i<=emails.length;i++){
        if (emails[i] == emailUser){
            controleEmail= i;
        }
    }
    for (let i = 0; i<=senhas.length;i++){
        if (senhas[i] == senhasUser){
            controleSenha= i;
        }
    }
    if(controleEmail==controleSenha){
        console.log("Usuário Logado")
        cont = false
    }else{
        console.log("Usuário inválido!")
    }

}