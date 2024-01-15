/*Escreva um programa que determina o maior entre três números*/

function verificaMaior(num1, num2, num3){
    if(num1 > num2 && num1 > num3){
        return num1;
    } else if (num2 > num1 && num2 > num3){
        return num2;
    } else {
        return num3;
    }
}

var maior = verificaMaior(1,12,7);
console.log("O maior entre os três é ", maior);