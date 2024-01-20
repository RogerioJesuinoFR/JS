/*Escreva uma função que retorneo menor número em um array de números*/

function retornaMenor(array){
    return Math.min(...array);
}

console.log(`O menor numero do array é ${retornaMenor([1,3,5,7,3,2,0])}`);