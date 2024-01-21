/*Crie um objeto que represente um carro, com propriedades para a marca, modelo, ano e valocidade atual, e os seguintes métodos: acelerar, frear e obter velocidade atual*/

let carro = {
    marca: 'Chevrolet',
    modelo: 'Onix',
    ano: 2015,
    velocidadeAtual: 70,

    acelerar: function(num){
        this.velocidadeAtual += num;
        console.log("Carro acelerou");
    },

    frear: function(num){
        this.velocidadeAtual -= num;
        console.log("O carro freiou");
        if(this.velocidadeAtual <= 0){
            this.velocidadeAtual = 0;
            console.log("O carro está parado");
        } else {
            console.log("O carro freiou");
        }
    },

    obterVelocidade: function(){
        return this.velocidadeAtual;
    },
}

carro.acelerar(10);
console.log(carro.obterVelocidade(), "Km/h");

carro.frear(80);
console.log(carro.obterVelocidade(), "Km/h");
