/*Convertendo Objetos em Strings JSON*/

function objetoParaJson (obj){

    //JSON.stringify é uma função em JS que converte um objeto em uma string JSON. O JSON (JavaScript Object Notation) é um formato de dado leve e fávil de ler, comumente usado para troca de dados entre um servidor e um cliente, além de ser amplamente utilizado para armazenar configurações e dados estruturados.
    return JSON.stringify(obj);
}

const objetoTeste = {nome: "João", idade:25};
console.log(objetoParaJson(objetoTeste));