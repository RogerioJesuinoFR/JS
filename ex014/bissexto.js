/*Escreva um programa que verifica se um ano é bissexto*/

function verificaBissexto(ano){
    if((ano % 4 == 0 && ano % 100 != 0)||(ano % 400 == 0)){
        console.log(ano, " é bissexto");
    } else {
        console.log(ano, " não é bissexto");
    }
}

verificaBissexto(2000);
verificaBissexto(1394);
verificaBissexto(2024);