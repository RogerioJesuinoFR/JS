/*Escreva um programa que verifica se uma pessoa pode dirigir com base na idade*/

function verificaIdade(idade){
    if(idade < 18){
        console.log("Não pode dirigir");
    } else {
        console.log("Pode dirigir");
    }
}

verificaIdade(17);
verificaIdade(18);