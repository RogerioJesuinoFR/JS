/*Dado dois arrays, verifique se o segundo array é um subarray do primeiro*/

function eSubarray(principalArray, subarray){
    return principalArray.join(',').includes(subarray.join(','));
}

const principal = [1,2,3,4,5];
const subArr1 = [2,3,4];
const subArr2 = [2,4,5];
console.log(eSubarray(principal, subArr1));
console.log(eSubarray(principal, subArr2));