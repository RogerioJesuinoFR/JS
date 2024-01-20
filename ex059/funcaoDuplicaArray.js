/*Escreva uma função que receba um array de números e retorne um novo array com todos os números duplicados*/

function duplicaArray(array){
    return array.map(num => num * 2);
}

console.log(duplicaArray([5,2,1,3,4]));