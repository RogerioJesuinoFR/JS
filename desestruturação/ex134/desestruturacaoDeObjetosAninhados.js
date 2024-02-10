/*Desestruturação de Objetos Aninhados*/

function extrairPropriedade(usuario){
    const {endereco: {cidade}} = usuario;
    return cidade;
}

const usuario = {nome: "Rogerio", endereco: {rua:"Rua A", cidade: "São Paulo", estado: "SP"}};
console.log(extrairPropriedade(usuario));