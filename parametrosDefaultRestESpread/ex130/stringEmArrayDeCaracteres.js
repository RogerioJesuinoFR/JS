/*Crie uma função que use o operador spread para transformar uma string em um array de caracteres*/

function stringParaArray(str){
    return [...str];
}

console.log(stringParaArray("Hello"));