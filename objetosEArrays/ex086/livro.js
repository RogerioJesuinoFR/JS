/*Crie um objeto "livro" que possui propriedades para o título, autor e número de páginas, e um método para exibir o livro no console*/

let livro = {
    titulo: '1984',
    autor: 'George Orwell',
    paginas: 328,

    exibirLivro: function(){
        console.log(this.titulo + ', escrito por ' + this.autor + ', com ' + this.paginas + ' páginas');
    }
};

livro.exibirLivro();