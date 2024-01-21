/*Crie um objeto "quadrado" que herda as propriedades do objeto "retangulo" e substitua o método para calcular a área.*/

// Defina o objeto retangulo
let retangulo = {
    largura: 0,
    altura: 0,
    calcularArea: function() {
        return this.largura * this.altura;
    }
};

// Crie o objeto quadrado que herda as propriedades do retangulo
let quadrado = Object.create(retangulo);
quadrado.largura = 5;
quadrado.altura = 5;

// Substitua o método calcularArea para o objeto quadrado
quadrado.calcularArea = function() {
    return this.largura * this.altura;
};

console.log(quadrado.calcularArea());


