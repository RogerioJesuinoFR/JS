/*ACessando propriedades de um Objeto Convertido*/

function acessarPropriedade(jsonStr, prop){
    const obj = JSON.parse(jsonStr);
    return obj[prop];
}

const jsonStringTeste = '{"nome":"João","idade":25}';

console.log(acessarPropriedade(jsonStringTeste, "nome"));