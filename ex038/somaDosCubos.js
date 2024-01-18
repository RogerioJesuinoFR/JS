/*Usando um laço do-while, imprima a soma dos cubos dos primeiros 10 números naturais*/

let soma = 0;
let i = 1;
do{
    soma += i*i*i;
    i++;
}while(i <= 10);
console.log(soma);