/*Escreva um programa que verifica a situação de um estudante de acordo com sua média final*/

function verificaSituacao(mediaFinal){
    if(mediaFinal >= 7){
        console.log("Aluno aprovado!");
    } else if(mediaFinal < 7 && mediaFinal >= 5){
        console.log("Aluno em recuperação!");
    } else {
        console.log("Aluno reprovado!");
    }
}

verificaSituacao(7);
verificaSituacao(5);
verificaSituacao(4.9);