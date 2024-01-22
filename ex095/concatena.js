/*Dado dois arrays, retorne um novo array que é a concatenação dos dois*/

function concatenaDois(arr1, arr2){
    return arr1.concat(arr2);
}

const primeiroArray = [1,2,3];
const segundoArray = [4,5,6];

console.log(concatenaDois(primeiroArray, segundoArray));