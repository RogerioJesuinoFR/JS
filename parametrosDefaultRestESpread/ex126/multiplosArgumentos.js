/*Cire uma função que aceite múltiplos argumentos utilizando o parâmetro rest, e retorne um novo array contando apenas os argumentos que são números*/

function filtrarNumeros(...args){
    return args.filter(arg => typeof arg === "number");
}

console.log(filtrarNumeros(1, "a", 3, "b", 5));