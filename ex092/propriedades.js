/*Dado um array de objetos que têm varias propriedades, crie um função que retorne um novo array contendo apenas os valores de uma propriedade especifica*/

function extraiPropriedade(arr, chave){
    return arr.map(obj => obj[chave]);
}

const usuarios = [
    {name: "John", age: 25},
    {name: "Jane", age: 30},
    {name: "Doe", age: 20},
];

console.log(extraiPropriedade(usuarios, "name"));