/*Usando um laço do-while, crie um programa que imprima a soma de duas matrizes*/

let matriz1 = [[1,2],[3,4]];

let matriz2 = [[5,6],[7,8]];
let soma = [];
let i = 0;
do{
    let j = 0;
    soma[i] = [];
    do{
        soma[i][j] = matriz1[i][j] + matriz2[i][j];
        j++;
    }while(j < matriz1[i].length);
    i++;
}while(i < matriz1.length);

//JSON.stringify(soma): A função JSON.stringify converte o valor do objeto soma em uma string JSON. Isso é útil para imprimir de maneira legível a representação da matriz, especialmente se a matriz for complexa.

console.log(`A soma das matrizes é ${JSON.stringify(soma)}`);