/*Combinando Desestruturação com Rest */

function separaNumeros(primeiro, segundo, terceiro, ...resto){
    return [primeiro,segundo,terceiro,resto];
}

console.log(separaNumeros(1,2,3,4,5,6));