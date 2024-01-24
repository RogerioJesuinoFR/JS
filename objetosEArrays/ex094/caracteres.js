/*Dado um array de strings e um número n, retorne um novo array contendo apenas as strings que têm mais de n caracteres.*/

function retornaStrings(arr, n){
    return arr.filter(palavra => palavra.length > n);
}

const palavra = ["maça", "banana", "cereja", "abacaxi"];
console.log(retornaStrings(palavra, 5));
