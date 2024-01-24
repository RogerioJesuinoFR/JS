/*Dado um array, retorne um novo array com todas as combinações possíveis de pares de elementos*/

function combineEmPares(arr){
    const resultado =[];
    for(let i = 0;i < arr.length;i++){
        for(let j = i + 1;j < arr.length;j++){
            resultado.push([arr[i], arr[j]]);
        }
    }
    return resultado;
}

const numeros = [1,2,3,4];
console.log(combineEmPares(numeros));