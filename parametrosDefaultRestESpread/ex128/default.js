/*Crie uma função que utilize parâmetros default para criar um objeto "caroo" com propriedades marca, modelo e ano, onde apenas modelo é obrigatório*/

function criarCarro(modelo, marca = "Desconhecido", ano = new Date().getFullYear()){
    return {marca, modelo, ano};
}

console.log(criarCarro("Civic"));
console.log(criarCarro("Civic", "Honda", 2020));