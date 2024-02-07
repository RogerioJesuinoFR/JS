/*Extração Simples de Propriedades de um Objeto*/

function extrairDadosPessoa(pessoa){
    const {nome, idade} = pessoa;
    return `Nome: ${nome}, Idade: ${idade}`;
}

const pessoa = {nome: "Rogerio", idade: 30, cidade: "São Paulo"};
console.log(extrairDadosPessoa(pessoa));