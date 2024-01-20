/*Escreva uma função que receba um array de números e retorne um novo array com a raiz quadrada de todos os números*/

function retornaRaiz(array){
    return array.map(num => Math.sqrt(num));
}

console.log(retornaRaiz([25,4,1,9,16]));