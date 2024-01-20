/*Escreva uma função que receba um array de números e retorne um novo array com todos os números duplicados*/

function duplicaArray(array){

    //método map cria um novo array com o resultado da chamada de uma função para cada elemento do array. A função passada para o map recebe um número e retorna o sobro desse número
    
    return array.map(num => num * 2);
}

console.log(duplicaArray([5,2,1,3,4]));