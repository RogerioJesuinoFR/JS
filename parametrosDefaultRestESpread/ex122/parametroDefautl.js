/*Crie uma função que receba até três parâmetros, sendo os dois primeiros obrigatórios e o terceiro opcional. Se o terceiro parâmetro não for fornecido, atribua o valor "Desconhecido" a ele utilizando parâmetros default*/

function informacoes(nome, idade, cidade = "Desconhecido"){
    return `Nome: ${nome}, Idade: ${idade}, Cidade: ${cidade}`;
}

console.log(informacoes("Rogerio", 23));
console.log(informacoes("Giovana", 20, "São Paulo"));