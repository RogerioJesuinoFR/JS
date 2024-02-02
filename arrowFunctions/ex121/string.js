/*Escreva uma arrow function que aceite uma string e retorne outra arrow function que aceite outra string. A função resultante deve concatenar as duas strings*/

const concatenaPrimeiraString = primeiraString => segundaString => primeiraString + segundaString;

const string = concatenaPrimeiraString("Olá ");
console.log(string("Mundo!"));
console.log(string("Rogerio!"));
