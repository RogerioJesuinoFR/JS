/*Implemente uma função que receba dois arrays e retorne um novo array contendo os elementos do primeiro array seguido dos elementos do segundo array. A função deve usar o parâmetro rest e o operador spread*/

function unirArrays(...arrays){
    return [].concat(...arrays);
}

console.log(unirArrays([1,2],[3,4],[5,6]));