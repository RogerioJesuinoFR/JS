/*Escreva um programa que verifica se uma palavra é um palíndromo*/

function verificaPalindromo(palavra){
    var palavraInvertida = palavra.split("").reverse().join("");
    if(palavra == palavraInvertida){
        console.log(palavra, " é um palíndromo");
    } else {
        console.log(palavra, "não é um palíndromo");
    }
}

verificaPalindromo("arara");
verificaPalindromo("gato");