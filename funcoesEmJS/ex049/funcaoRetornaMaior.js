/* Escreva uma função que aceite  três números como argumentos e retorne o maior deles*/

function retornaMaior(num1, num2, num3){
    return Math.max(num1, num2, num3);
    //Essa função nativa do JS retorna o maior entre os números passados como parametros
}

console.log(`O maior entre os 3 números é ${retornaMaior(3,5,4)}`);