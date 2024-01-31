/*Crie uma função que aceite nome, sobrenome e idade e retorne uma apresentação usando template literals*/

function apresentacao(nome, sobrenome,idade){
    return `Olá, meu nome é ${nome} ${sobrenome} e tenho ${idade} anos.`;
}

console.log(apresentacao("João", "Silva", 30));