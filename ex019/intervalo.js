/*Escreva um programa que verifica se um número está dentro de um determinado intervalo*/

function verificaIntervalo(num){
    var intervaloMin = 0;
    var intervaloMax = 100;
    if(num <= 100 && num >= 0){
        console.log("O número", num, "está no intervalo entre", intervaloMin, "e", intervaloMax);
    } else {
        console.log("O número", num, "não está no intervalo entre", intervaloMin, "e", intervaloMax)
    }
}

verificaIntervalo(55);
verificaIntervalo(101);
verificaIntervalo(-1);