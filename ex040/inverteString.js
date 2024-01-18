/*Usando um laço while, crie um programa que inverta uma string*/

let original = 'Hello';

let invertida = "";
let i = original.length - 1;
while(i >= 0){
    invertida += original[i];
    i--;
}
console.log(`A string  "${original}" invertida é "${invertida}"`);