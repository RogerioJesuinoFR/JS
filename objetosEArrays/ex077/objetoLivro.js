/*Crie um objeto que represente um livro, com propriedades para o título, autor e número de páginas. Em seguida, adicione um método ao objeto que imprima uma descrição do livro*/

let livro = {
    titulo: 'O hobbit',
    autor: 'J.R.R.Tolkien',
    numeroDePaginas: 310,

    descrição: function(){
        console.log(`O livro ${this.titulo}, escrito por ${this.autor}, tem ${this.numeroDePaginas} páginas.`);
    }
}

livro.descrição();