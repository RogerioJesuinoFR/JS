/*Escreva uma função de alta ordem que aceite um array de números e uma função de callback, e retorne um novo array que contém apenas os números do array original que satisfazem a condição da função de callback*/

function filtrarNumeros(array, callback){

    //A função filtrarNumeros usa o método filter do array, que cria um novo array com todos os elementos que passam no teste implementado pela função de callback fornecida. Neste caso, a função de callback testa se um número é maior que 3
    
    return array.filter(callback);
}

let numeros = [1,2,3,4,5];
let callback = num => num > 3;

console.log(filtrarNumeros(numeros, callback));