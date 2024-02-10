/*Desestruturação de arrays aninhados*/

function extrairValoresAninhados(array){
    const [[, valor1], [valor2]] = array;
    return [valor1, valor2];
}

console.log(extrairValoresAninhados([[1,2,3],[4,5]]));