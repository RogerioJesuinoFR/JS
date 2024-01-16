/*Escreva um programa que determina a estação do ano com base no mês*/

function verificaEstacao(mes){
    if (mes < 3 || mes === 12){
        console.log("Verão");
    } else if (mes < 6) {
        console.log("Outono");
    } else if (mes < 9){
        console.log("Inverno");
    } else if (mes < 12){
        console.log("Primavera");
    } else {
        console.log("Mês inválido");
    }
}

verificaEstacao(2);
verificaEstacao(5);
verificaEstacao(8);
verificaEstacao(11);
verificaEstacao(13);