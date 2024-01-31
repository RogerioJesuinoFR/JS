/*Crie uma função que aceite um objeto com informações de um livro (título, autor e ano) e retorne uma descrição do livro usando template literals*/

function descreveObjeto(livro){
    return `O livro ${livro.titulo} do(a) autor(a) ${livro.autor} foi escrito em ${livro.ano}.`;
}

console.log(descreveObjeto({titulo: "Iron flame", autor: "Rebecca Yarros", ano: 2023}));