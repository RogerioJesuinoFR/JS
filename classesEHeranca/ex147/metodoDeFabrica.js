class Carro {
    constructor(tipo){
        this.tipo = tipo;
    }

    static criarSedan(){
        return new Carro('Sedan');
    }
}

const sedan = Carro.criarSedan();
console.log(sedan.tipo);