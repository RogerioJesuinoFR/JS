/*Escreva uma função que aceite um número, um array de funções de callback e um valor inicial, e retorne o resultado final após a aplicação de todas as funções de callback no valor inicial, o número de vezes especificado*/

function aplicarCallbacksNTimes(n, callback, valorInicial){
    let valor = valorInicial;
    for(let i = 0;i < n;i++){

        //A função aplicarCallbacksNTimes usa loop for para aplicar cada função de callback no valor atual n vezes. O valor resultante de uma função de callback é usado como entrada para a próxima função de callback. O valor resultante final é retornado.
        
        callback.forEach(callback => {valor = callback(valor);});
    }
    return valor;
}

let callback = [num => num * 2, num => num + 1];
let valorInicial = 1;

console.log(aplicarCallbacksNTimes(2, callback, valorInicial));