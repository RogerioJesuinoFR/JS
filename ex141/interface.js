/*Interface usando classes*/

class Voador {
    voar(){
        return "Estou voando!";
    }
}

class Nadador {
    nadar(){
        return "Estou nadando!";
    }
}

class Pato extends Voador {
    constructor(){
        super();
        const nadador = new Nadador();
        this.nadar = nadador.nadar.bind(this);
    }
}

const pato = new Pato();
console.log(pato.voar());
console.log(pato.nadar());