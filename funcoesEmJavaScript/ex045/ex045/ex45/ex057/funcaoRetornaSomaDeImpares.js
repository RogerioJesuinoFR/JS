/*Escreva uma função re torne a soma de todos os números ímpares em um array de números*/

function somaImpares(array){
    return array.reduce((soma, num) => num % 2 !== 0 ? soma + num:soma,0);
}

console.log(somaImpares([5,2,1,3,4]));