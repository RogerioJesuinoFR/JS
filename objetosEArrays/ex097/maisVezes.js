/*Dado um array, encontre o elemento que aparece mais vezes*/

function maisFrequente(arr){
    const frequencia = {};
    let maxCont = 0;
    let maisFrequente;

    for (let item of arr){
        if(frequencia[item]){
            frequencia[item]++;
        } else {
            frequencia[item] = 1;
        }

        if(frequencia[item] > maxCont){
            maxCont = frequencia[item];
            maisFrequente = item;
        }
    }

    return maisFrequente;
}

const numeros = [1,2,3,2,4,3,5,2];
console.log(maisFrequente(numeros));