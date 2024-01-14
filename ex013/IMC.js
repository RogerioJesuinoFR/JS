/*Escreva um programa que calcula o IMC (Índice de Massa Corporal) de uma pessoa e imprime uma mensagem indicando se a pessoa está abaixo do peso, com peso normal, com sobrepeso ou obesa.*/

function calculaIMC(peso, altura){
    var IMC = peso/ (altura * altura);
    if(IMC < 18.5){
        console.log(IMC, " abaixo do peso");
    } else if(IMC >= 18.5 && IMC < 24.99){
        console.log(IMC, " Peso normal");
    } else if (IMC >= 25 && IMC < 29.99){
        console.log(IMC, " Sobrepeso");
    } else {
        console.log(IMC, " Obeso");
    }
}

calculaIMC(73.2, 1.70);