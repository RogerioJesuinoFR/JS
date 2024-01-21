/*Crie um objeto "tempo" que possui propriedades para horas, minutos e segundos, e um método para converter o tempo para segundos*/

let tempo = {
    horas: 2,
    minutos: 30,
    segundos: 15,

    converterParaSegundos: function(){
        return this.horas * 3600 + this.minutos * 60 + this.segundos;
    }
};

console.log(tempo.converterParaSegundos());