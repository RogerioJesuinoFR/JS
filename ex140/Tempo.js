/*Classe Tempo*/

class Tempo {
    constructor (horas = 0, minutos = 0, segundos = 0){
        this.horas = horas;
        this.minutos = minutos;
        this.segundos = segundos;
    }

    somar(tempo){
        let totalSegundos = this.segundos + tempo.segundos;
        let totalMinutos = this.minutos + tempo.minutos;
        let totalHoras = this.horas + tempo.horas;

        if(totalSegundos >= 60){
            totalMinutos += Math.floor(totalSegundos / 60);
            totalSegundos %= 60;
        }
        if (totalMinutos >= 60){
            totalHoras += Math.floor(totalMinutos / 60);
            totalMinutos %= 60;
        }
        return new Tempo(totalHoras, totalMinutos, totalSegundos);
    }

    subtrair(tempo){
        let totalSegundos = this.segundos - tempo.segundos;
        let totalMinutos = this.minutos - tempo.minutos;
        let totalHoras = this.horas - tempo.horas;

        if(totalSegundos < 0){
            totalMinutos -= Math.ceil(Math.abs(totalSegundos) / 60);
            totalSegundos = 60 - (Math.abs(totalSegundos) % 60);
        }

        if(totalMinutos < 0){
            totalHoras -= Math.ceil(Math.abs(totalMinutos) / 60);
            totalMinutos = 60 - (Math.abs(totalMinutos) % 60);
        }   
        return new Tempo(totalHoras, totalMinutos, totalSegundos);
    }
}

const tempo1 = new Tempo(1, 20, 30);
const tempo2 = new Tempo (0, 50, 40);

let resultado = tempo1.somar(tempo2);

console.log(`${resultado.horas}h:${resultado.minutos}m:${resultado.segundos}s`);

resultado = tempo1.subtrair(tempo2);
console.log(`${resultado.horas}h:${resultado.minutos}m:${resultado.segundos}s`);