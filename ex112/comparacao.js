/*Escreva uma função que aceite dois valores e retorne um texto que faça uma comparação entre eles usando template literals*/

function comparaValores(val1, val2){
    let res = val1 === val2 ? "igual a" : (val1 > val2 ? "maior que " : "menor que ");
    return `O valor ${val1} é ${res}o valor ${val2}`;
}

console.log(comparaValores(2,1));
console.log(comparaValores(2,2));
console.log(comparaValores(2,3));