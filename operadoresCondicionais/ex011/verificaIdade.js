/*Escreva um programa que cerifica se uma pessoa pode votar com base na idade*/

function verificaIdade(idade){
    if(idade >= 16 && idade < 18 || idade > 70){
        console.log("O voto é opcional");
    } else if (idade >= 18){
        console.log("O voto é obrigatório");
    } else {
        console.log("O voto não é permitido");
    }
}

verificaIdade(15);
verificaIdade(71);
verificaIdade(16);
verificaIdade(18);