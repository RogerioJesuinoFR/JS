/*Dado um array e um número n, divida o array em várias sub-arrays onde cada sub-array tem no máximo n elementos*/

function divideArray(arr, n){
    const pedacos = [];
    for(let i = 0;i < arr.length;i += n){
        pedacos.push(arr.slice(i,i + n));
    }
    return pedacos;
}

const itens = [1,2,3,4,5,6,7];
console.log(divideArray(itens, 3));