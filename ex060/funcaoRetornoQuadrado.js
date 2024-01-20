/*Escreva uma função que receba um array de números e retorne um novo array com todos os números ao quadrado*/

function retornaQuadrado(array){
    return array.map(num => num * num);
}

console.log(`O quadrado dos números é [${retornaQuadrado([16, 32, 43, 59, 24])}]`);