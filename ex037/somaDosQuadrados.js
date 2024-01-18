/*Usando um laço while, imprima a soma dos quadrados dos primeiros 10 números naturais*/

let i = 1;
let soma = 0;
while(i <= 10){
    soma += i*i;
    i++;
}
console.log(soma);