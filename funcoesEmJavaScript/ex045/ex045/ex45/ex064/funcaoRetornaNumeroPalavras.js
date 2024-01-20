/*Escreva uma função que receba uma string e retorne o número de palavras na string*/

function contaPalavras(str){
    return str.split(' ').length;
}

console.log(contaPalavras("Olá, Mundo!"));