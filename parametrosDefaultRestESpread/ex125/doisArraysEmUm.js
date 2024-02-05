/*Escreva uma função que combine dois arrays em um novo array. Use o operador spread para realizar essa tarefa*/

function combinarArrays (arr1, arr2){
    return [...arr1, ...arr2];
}

console.log(combinarArrays([1,2,3],[4,5,6]));