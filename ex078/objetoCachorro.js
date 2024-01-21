/*Crie um objeto "cachorro" com propriedades para raça, nome e idade. Adicione um método que retorne a idade do cachorro em anos humanos (idade do cachorro * 7)*/

let cachorro = {
    raca: 'Labrador',
    nome: 'Marley',
    idade: 10,


    idadeEmAnosHumanos: function(){
        return this.idade * 7;
    }
}

console.log(`O cachorro ${cachorro.nome}, da raça ${cachorro.raca}, tem ${cachorro.idade} anos de idade, que equivale a ${cachorro.idadeEmAnosHumanos()} em anos humanos`);