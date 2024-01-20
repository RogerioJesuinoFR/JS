/*Escreva uma função de alta ordem que aceite uma função de callback e um array, e retorne um novo array que contém os resultados de aplicar a função de callback a cada elementos do array, sem alterar o array original*/

function mapearSemAlterar(array,callback){
    return array.map(callback);
}

let numeros = [1,2,3,4,5];
let callback = num => num * 2;

console.log(mapearSemAlterar(numeros, callback));
console.log(numeros);