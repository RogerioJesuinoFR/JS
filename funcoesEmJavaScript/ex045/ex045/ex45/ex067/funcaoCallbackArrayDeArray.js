/*Escreva uma função que aceite uma função de callback e um array de arrays, e retorne um novo array que contém os resultados de aplicar a função de callback a cada array*/

function mapearArrays(array, callback){

    //A função mapearArrays usa o método map do array, que cria um novo array com os resultados de chamar uma função de callback fornecida em cada elemento do array. Neste caso, a função de callback soma todos os elementos de cada array
    
    return array.map(callback);
}

let arrays = [[1, 2, 3],[4,5,6],[7,8,9]];
let callback = arr => arr.reduce((a, b) => a + b, 0);

console.log(mapearArrays(arrays, callback));