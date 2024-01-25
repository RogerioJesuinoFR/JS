/*Escreva uma função que aceite um array de números e uma função de callback e retorne a soma de todos os números do array após a aplicação da função de callback*/

function somaComCallback(array, callback){

    //Ela permite passar uma função como argumento para outra função, que será executada em um momento específico ou em resposta a um evento.
    
    return array.map(callback).reduce((a, b) => a + b, 0);
}

let numeros = [1,2,3,4,5];
let callback = num => num * 2;

console.log(somaComCallback(numeros, callback));