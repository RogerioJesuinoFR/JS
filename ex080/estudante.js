/*Crie um objeto que represente um estudante, com propriedades para o nome, notas de várias matérias e um método para calcular a média das notas*/

let estudante ={
    nome: 'João',
    notas: [6, 7, 4, 9],

    calcularMedia: function(){
        let soma = 0;
        for(let i = 0;i < this.notas.length;i++){
            soma += this.notas[i];
        }
        return soma / this.notas.length;
    }
};

console.log(`A média das notas do ${estudante.nome} é ${estudante.calcularMedia()}`);