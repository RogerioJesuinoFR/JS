/*Dado um array que contém vários elementos duplicados, crie uma função que remova todas as duplicatas e retorne um array com elementos únicos*/

function removeDuplicatas(arr){
    return [...new Set (arr)];
}

const numeros = [1,2,3,2,4,3,5,6,7,5,8];
console.log(removeDuplicatas(numeros));