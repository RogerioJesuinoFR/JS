/*Crie um objeto "círculo" que possui uma propriedade de raio e dois métodos que calculam a área e a circunferência.*/

const PI = 3.14;

let circulo = {
    raio: 5,

    calcularArea: function(){
        let area = PI * (this.raio * this.raio);
        return area; 
    },

    calcularCircunferencia: function(){
        let circunferencia = 2 * PI * this.raio;
        return circunferencia;
    }
}

console.log(circulo.calcularArea());
console.log(circulo.calcularCircunferencia());