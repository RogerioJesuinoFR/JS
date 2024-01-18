/*Escreva um programa que determina se um número é par ou ímpar*/

function verificaParOuImpar(num1){
    if(num1 % 2 == 0){
        console.log(num1, "é par");
    } else {
        console.log(num1, "é ímpar");
    }
}

verificaParOuImpar(2);
verificaParOuImpar(7);