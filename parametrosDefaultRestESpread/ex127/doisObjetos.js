/*Implemente uma função que aceite dosi objetos. Use o operador spread para mesclar os dois objetos em um novo objeto*/

function mesclarObjetos(obj1, obj2){
    return {...obj1, ...obj2};
}

const objeto1 = {nome: "Rogerio"};
const objeto2 = {idade: 30};
console.log(mesclarObjetos(objeto1, objeto2));