/*Classe abstrata*/

class Forma{
    area(){
        throw new Error("Método 'area' deve er implementado por subclasses!");
    }
}

class Circulo extends Forma {
    constructor(raio){
        super();
        this.raio = raio;
    }

    area(){
        return Math.PI * Math.pow(this.raio, 2);
    }
}

class Retangulo extends Forma{
    constructor(largura, altura){
        super();
        this.largura = largura;
        this.altura = altura;
    }

    area(){
        return this.largura * this.altura;
    }
}

const circulo = new Circulo(5);
console.log(circulo.area());

const retangulo = new Retangulo(4, 6);
console.log(retangulo.area());