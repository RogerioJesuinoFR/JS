/*Dado dois arrays, um com vários números pares e outro com números ímpares, combine-os, em seguida, filtre apenas os números que são múltiplos de 5*/

function combineEFiltre(pares, impares){
    return pares.concat(impares).filter(num => num % 5 === 0);
}

const pares = [2,4,10,12,20];
const impares = [1,3,5,15,25];
console.log(combineEFiltre(pares, impares));