/*  Escreva um programa que determina o número de dias em um mês */

function determinaDiasNoMes(mes){
    switch(mes){
        case 1:
            console.log("31 dias");
            break;
        case 2:
            console.log("28 dias");
            break;
        case 3:
            console.log("31 dias");
            break;
        case 4:
            console.log("30 dias");
            break;
        case 5:
            console.log("31 dias");
            break;
        case 6:
            console.log("30 dias");
            break;
        case 7:
            console.log("31 dias");
            break;
        case 8:
            console.log("31 dias");
            break;
        case 9:
            console.log("30 dias");
            break;
        case 10:
            console.log("31 dias");
            break;
        case 11:
            console.log("30 dias");
            break;
        case 12:
            console.log("31 dias");
            break;
        default:
            console.log("Mês inválido");
            break;
    }
}

determinaDiasNoMes(1);
determinaDiasNoMes(2);
determinaDiasNoMes(3);
determinaDiasNoMes(4);
determinaDiasNoMes(5);
determinaDiasNoMes(6);
determinaDiasNoMes(7);
determinaDiasNoMes(8);
determinaDiasNoMes(9);
determinaDiasNoMes(10);
determinaDiasNoMes(11);
determinaDiasNoMes(12);
determinaDiasNoMes(13);
determinaDiasNoMes(0);