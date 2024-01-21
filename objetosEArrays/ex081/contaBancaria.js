/*Crie um objeto representando uma conta bancária, que possui uma propriedade de saldo e métodos para depósito e saque*/

let contaBancaria = {
    saldo: 0.00,

    depositar: function (num){
        if(num > 0.0){
            this.saldo += num;
            console.log("Deposito realizado!");
        } else {
            console.log("Valor de deposito inválido!");
        }
        console.log("Saldo: R$", this.saldo);
    },

    sacar: function(num){
        if(num <= this.saldo){
            this.saldo -= num;
            console.log("Saque realizado!");
        } else {
            console.log("Saldo insuficiente.");
        }
        console.log("Saldo: R$", this.saldo);
    }
}

contaBancaria.depositar(-20.00);
contaBancaria.depositar(1000.00);
contaBancaria.sacar(500.00);

contaBancaria.sacar(500.00);
contaBancaria.sacar(1);