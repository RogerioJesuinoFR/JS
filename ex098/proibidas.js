/*Dado um array de strings e um array de palavras proibidas, retorne um novo array sem as palavras proibidas*/

function filtraPalavrasProibidas(palavras, proibidas){
    return palavras.filter(palavras => !proibidas.includes(palavras));
}

const todasPalavras = ["maça", "banana", "cereja", "abacaxi"];
const proibidasPalavras = ["banana", "abacaxi"];
console.log(filtraPalavrasProibidas(todasPalavras, proibidasPalavras));