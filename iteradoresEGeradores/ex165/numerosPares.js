/*Crie um iterador que retorne os números pares e ímpares alternadamente de um array, começando pelos pares.*/

function *alternateEvenOdd(array){
    let evens = array.filter(x => x % 2 === 0);
    let odds = array.filter(x => x % 2 !== 0);
    let index = 0;

    while(index < evens.length || index < odds.length){
        if(index < evens.length) yield evens[index];
        if(index < odds.length)yield odds[index];
        index++;
    }
}

const numbers = [1,2,3,4,5,6,7,8];
const alternated = alternateEvenOdd(numbers);
console.log([...alternated]);