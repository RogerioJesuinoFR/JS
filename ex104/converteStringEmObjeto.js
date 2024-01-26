/*COnvertendo String JSON em Objetos*/

function jsonParaObjeto(jsonStr){

    //'JSON.parse' é uma função JS que converte uma string JSON em um objeto
    return JSON.parse(jsonStr);
}

const jsonStringTeste = '{"nome":"João","idade":25}';
console.log(jsonParaObjeto(jsonStringTeste));

