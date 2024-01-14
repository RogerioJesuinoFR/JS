/*Escreva um programa que recebe um número e verifica se ele é positivo, negativo ou zero*/

function verificaPositivo(num1){

    if(num1 < 0){
        console.log("O número ", num1," é negativo!");
    } else if(num1 > 0){
        console.log("O número ", num1, " é positivo!");
    } else {
        console.log("O numero é zero!");
    }
}

verificaPositivo(4);
verificaPositivo(-13);
verificaPositivo(0);

