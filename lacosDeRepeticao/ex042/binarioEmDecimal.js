/*Usando um laço for, crie um programa que transforme um número binário em decimal.*/

let binario = '1010';

let decimal = 0;
for(let i = binario.length - 1,j = 0;i >= 0; i--,j++){
    decimal += parseInt(binario[i])*Math.pow(2,j);
}
console.log(`O número em decimal é ${decimal}`);