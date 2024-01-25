/*Escreva uma função que retorne o maior número em um array de números*/

function retornaMaior(array){
    return Math.max(...array);
}

console.log(`O maior número do array é ${retornaMaior([1,7,3,8,4,5,9])}`);