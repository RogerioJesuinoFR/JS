/* Escreva um programa que verifica as cores de um semafáro */

function semafaro(cor){
    if(cor === "verde"){
        console.log("Siga em frente");
    } else if (cor === "amarelo"){
        console.log("Atenção, diminua a velocidade");
    } else if (cor === "vermelho"){
        console.log("Pare!");
    } else {
        console.log("Informe uma cor válida");
    }
}

semafaro("verde");
semafaro("vermelho");
semafaro("amarelo");
semafaro("azul");