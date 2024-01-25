/*Escreva uma função que aceite um número como argumento e retorne se ele é par ou ímpar*/

function parOuImpar(num){
    if(num % 2 === 0){
        return "par";
    } else {
        return "impar";
    }
}

console.log(`O número é ${parOuImpar(2)}`);