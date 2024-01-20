/*Escreva uma função de alta ordem que aceite um array de funções de callback e um valor, e retorne um novo array que contém os resultados de aplicar a função de callback ao valor, na ordem inversa*/

function aplicarCallbacksInversamente(callback, valor){
    return callback.reverse().map(callback => callback(valor));
}

let callback = [num => num * 2, num => num * num, num => num/2];
let valor = 4;

console.log(aplicarCallbacksInversamente(callback, valor));