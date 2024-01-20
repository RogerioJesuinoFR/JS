/*Escreva uma função que aceite uma função de callback que retorne verdadeiro ou falso e um array, e retorne um novo array que contém apenas os elementos para os quais a função de callback retornou verdadeiro.*/

function filtrarPorCallback(array, callback){

    //A função filtrarPorCallback usa o método filter do array, que cria um novo array com todos os elementos que passam no teste implementado pela função de callback fornecida. Neste caso, a função de callback testa se um número é par
    
    return array.filter(callback);
}

let numeros = [1,2,3,4,5];
let callback = num => num % 2 === 0;

console.log(filtrarPorCallback(numeros, callback));