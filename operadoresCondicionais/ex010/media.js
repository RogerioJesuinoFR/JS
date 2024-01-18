/*Escreva um programa que recebe duas notas de um aluno, calcula a média e imprime se o aluno foi aprovado ou reprovado (considerando que a média para aprovação é 7)*/

function calculaMedia(nota1, nota2){
    var media = (nota1 + nota2)/2;
    if(media < 7){
        console.log("O Aluno está reprovado...");
    } else {
        console.log("O Aluno está aprovado!!!");
    }
}

calculaMedia(6, 8);

calculaMedia(2.3, 4.7);