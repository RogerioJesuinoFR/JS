/*Dada uma string com várias palavras separadas por espaçoes, transforme-a em um array e depois retorne a palavra mais longa*/

function palavraLonga(string){
    const palavras = string.split(" ");
    return palavras.reduce((acc, curr) => curr.length > acc.length ? curr : acc, "");
}

const sentence = "Essa frase tem muitas palavras, qual é a maior?";
console.log(palavraLonga(sentence));
