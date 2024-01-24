/*Dado um array de números, retorne a soma de todos os valores únicos*/

function somaValoresUnicos(arr){
    return arr.filter(num => arr.indexOf(num) === arr.lastIndexOf(num)).reduce((acc, curr) => acc + curr, 0);
}

const numeros = [1,2,3,2,3,4,5];
console.log(somaValoresUnicos(numeros));