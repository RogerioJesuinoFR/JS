/*Escreva um programa que imprime uma classificação baseada na nota de um aluno*/

function classificaAluno(nota){
    if(nota >= 9){
        console.log("A");
    } else if(nota >= 8){
        console.log("B");
    } else if(nota >= 7){
        console.log("C");
    } else if(nota >= 6){
        console.log("D");
    } else if(nota >= 5){
        console.log("E");
    } else {
        console.log("F");
    }
}

classificaAluno(9);
classificaAluno(8);
classificaAluno(7);
classificaAluno(6);
classificaAluno(5);
classificaAluno(4);