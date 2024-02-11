/*Encapsulamento*/

class Pessoa {
    constructor(nome,idade){
        this.nome = nome;
        this.idade = idade;
    }

    get idade(){
        return this._idade;
    }

    set idade(valor){
        if(valor < 0){
            console.log("Idade não pode ser negativa!");
            return;
        }
        this._idade = valor;
    }
}

const pessoa = new Pessoa("Rogerio", 23);
console.log(pessoa.idade);

pessoa.idade = -5;
console.log(pessoa.idade);