/*Crie uma função que aceite uma lista de itens e retorne uma string enumerada usando template literals*/

function listaEnumerada(itens){
    return itens.map((item, index) => `${index + 1}.${item}`).join(',');
}

console.log(listaEnumerada(['maçã', 'banana', 'uva']));