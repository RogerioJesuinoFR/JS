/*Crie uma arrow function que tome um array de números como argumento e retorne a soma de todos eles*/

const somaArray = numeros => numeros.reduce((acc, curr) => acc + curr, 0);

console.log(somaArray([1,2,3,4]));