/*Escrva uma função de alta ordem que aceite um array de funções de callback e um valor, e retorne um array de resultados de aplicar cada função de callback ao valor*/

function aplicarCallbacks(callback, valor){

    //A função aplicarCallbacks usa o método map do array, que cria um novo array com os resultados de chamar uma função de callback fornecida em cada elemento do array. Neste caso, cada função de callback é aplicada ao valor fornecido
    
    return callback.map(callback => callback(valor));
}

let callback = [num => num * 2, num => num * num, num => num/2];
let valor = 4;

console.log(aplicarCallbacks(callback, valor));