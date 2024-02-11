class Veiculo{
    constructor(marca, modelo){
        this.marca = marca;
        this.modelo = modelo;
    }
}

class Carro extends Veiculo{
    constructor(marca, modelo, nDePortas){
        super(marca, modelo);
        this.nDePortas = nDePortas;
    }
}

const carro = new Carro("Toyota", "Corolla", 4);
console.log(carro);