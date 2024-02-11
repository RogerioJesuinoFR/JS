
class Pessoa{
    constructor (nome){
        this.nome = nome;
    }

    falar(){
        return `${this.nome} está falando.`;
    }
}

class Vendedor extends Pessoa {
    constructor (nome){
        super(nome);
        this.totalVendas = 0;
    }

    vender(){
        this.totalVendas++;
        return `${this.nome} fez uma venda.`;
    }
}

const vendedor = new Vendedor ("Carlos");
console.log(vendedor.vender());

console.log(vendedor.totalVendas);