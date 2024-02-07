/*Desestruturação de Arrays com Valores Padrão*/

function extrairValores(array){
    const [primeiro = null, segundo = null, terceiro = null] = array;
    return [primeiro,segundo,terceiro];
}

console.log(extrairValores([1,2]));
console.log(extrairValores([1,2,3,4]));