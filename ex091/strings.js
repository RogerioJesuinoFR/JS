/*Dado um array de strings ordene-o em ordem decrescente com base no comprimento de cada string*/

function ordenaPorTamanho(arr){
    return arr.sort((a, b) => b.length - a.length);
}

const palavras = ["maça", "banana", "cereja", "data", "abacaxi"];

console.log(ordenaPorTamanho(palavras));