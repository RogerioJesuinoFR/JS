/*Trabalhando com arrays em JSON*/

function adicionarAoArray(jsonStr, novoObjeto){
    const arr = JSON.parse(jsonStr);
    arr.push(novoObjeto);
    return arr;
}

const jsonStringTeste = '[{"nome":"João","idade":25},{"nome":"Maria","idade":30}]';
console.log(adicionarAoArray(jsonStringTeste, {nome:"Pedro", idade:22}));