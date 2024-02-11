class Conta{
    constructor(saldo){
        this.saldo = saldo;
    }

    sacar(valor){
        if(valor > this.saldo){
            throw new Error('Saldo insuficiente.');
            
        }
        this.saldo -= valor;
        return this.saldo;
    }
}

const conta = new Conta(100);
console.log(conta.sacar(50));

try {
    conta.sacar(100);
} catch (e){
    console.log(e.message);
}