/*Escreva uma arrow function que aceite um número com argumento e retorne uma função que incrementa esse número*/

const incrementaNumero = numero => () => ++numero;

const incrementaDe5 = incrementaNumero(5);
console.log(incrementaDe5());