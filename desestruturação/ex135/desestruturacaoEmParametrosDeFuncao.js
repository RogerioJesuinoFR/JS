/*Desestruturação em parâmetros de Função*/

function exibirInformacoes({nome, idade}){
    return `Nome: ${nome}, Idade: ${idade}`;
}

const pessoa = {nome: "Rogerio", idade: 23};
console.log(exibirInformacoes(pessoa));