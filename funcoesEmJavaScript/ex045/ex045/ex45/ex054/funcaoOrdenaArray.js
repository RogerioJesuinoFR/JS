/*Escreva uma função que ordene um array de números em ordem decrescente*/

function ordenaArray(array){

    //A função nativa sort em um array, com um argumento de função de comparação personalizada, tem o proposito de determinar a ordem dos elementos durante a ordenação.
    
    //A função de comparação (a, b) => b - a está comparando dois elementos a e b. Se o resultado for negativo, significa que a deve vir antes de b na ordem desejada; se for positivo, significa que b deve vir antes de a; e se for zero, a ordem entre a e b é considerada indiferente

    return array.sort((a, b) => b - a);
}
console.log(ordenaArray([5,2,1,3,4]));