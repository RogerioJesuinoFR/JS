/*Crie um objeto "retangulo" que possui propriedades para altura e largura, e um método para calcular a área.*/

let retangulo = {
    altura: 10,
    base: 20,

    calcularArea: function(){
        return this.base * this.altura;
    }
};

console.log(`A área do retangulo é ${retangulo.calcularArea()} cm^2`);