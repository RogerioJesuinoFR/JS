/*Converta a seguinte função em uma arrow function e retorne o resultado:

function helloWorld(name){
    return "Hello," + name + "!";
}

*/

const helloWorld = name => `Hello, ${name}!`;

console.log(helloWorld("Alice"));