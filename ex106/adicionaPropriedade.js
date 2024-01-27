/*Adicionando propriedades a um Objeto convertido*/

function adicionarPropriedade (jsonStr, chave, valor){
    const obj = JSON.parse(jsonStr);
    obj[chave] = valor;
    return obj;
}

const jsonStringTeste = '{"nome":"João","Idade":25}';
console.log(adicionarPropriedade(jsonStringTeste, "profissão", "Engenheiro"));