/*Escreva uma função que retorne a soma de todos os números pares em um array de números*/

function somaPares(array){
    return array.reduce((soma, num) => num % 2 === 0 ? soma + num: soma,0);
}

console.log(somaPares([5,2,1,3,4]));