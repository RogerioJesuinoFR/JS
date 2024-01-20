/*Escreva uma função que aceite um número e uma função de callback, e execute a função de callback o número de vezes especificado*/

function executarCallback(n, callback){

    //A função executarCallback usa um loop for para executar a função de callback n vezes. A função de callback recebe o número da execução atual como argumento e imprime uma mensagem
    
    for (let i = 0; i < n; i++){
        callback(i);
    }
}

let callback = i => console.log(`Execução ${i + 1}`);

executarCallback(5, callback);