/*Dado um array de números, encontre a mediana*/

function encontraMediana(arr){
    arr.sort((a, b) => a - b);
    const meio = Math.floor(arr.length /2);
    let mediana = 0;
    if(meio % 2 === 0){
        mediana = (arr[meio - 1] + arr[meio])/2;
    } else {
        mediana = arr[meio];
    }
    return mediana;
}

const numeros = [5,2,9,1,5,6];

console.log(`A mediana é ${encontraMediana(numeros)}`);