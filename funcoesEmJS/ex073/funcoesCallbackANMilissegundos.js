/*Escreva uma função de alta ordem que aceite um número, um array de funções de callback e um valor inicial, e retorne o resultado final após a aplicação de todas as funções de callback no valor inicial, a cada "n" milissegundos*/

function aplicarCallbacksComIntervalo(n, callback, valorInicial){
    let valor = valorInicial;
    let i = 0;
    let intervalId = setInterval(() => {
        if(i < callback.length){
            valor = callback[i](valor);
            i++;
        } else {
            clearInterval(intervalId);
            console.log(valor);
        }
    }, n);
}

let callback = [num => num * 2, num => num + 1];
let valorInicial = 1;

aplicarCallbacksComIntervalo(2000,callback,valorInicial);