/*Utilize um gerador para criar um iterável que gere uma sequência aritmética, dado um valor inicial, uma razão e o número de termos.*/

function *sequenciaAritmetica(inicio, razao, n){
    for (let i = 0;i < n;i++){
        yield inicio;
        inicio += razao;
    }
}

const sequencia = sequenciaAritmetica(1,2,5);
console.log([...sequencia]);