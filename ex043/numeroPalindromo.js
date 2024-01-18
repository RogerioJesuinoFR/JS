/*Usando um laço while, crie um programa que determine se um número é palíndromo ou não (um número é palindromo se for igual ao seu reverso)*/

let numero = 12322;
let reverso = 0;
let temp = numero;
while(temp > 0) {
    let digito = temp % 10;
    reverso = (reverso * 10) + digito;
    temp = Math.floor(temp / 10);
}
if (numero == reverso ){
    console.log(`${numero} é um palíndromo`);
} else {
    console.log(`${numero} não é um palíndromo`);
}