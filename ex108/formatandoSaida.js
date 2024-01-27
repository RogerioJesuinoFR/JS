/*Formantendo a saída JSON*/

function formatarJson (obj){
    return JSON.stringify(obj, null, 2);
}

const objetoTeste = {nome:"João", idade: 25};
console.log(formatarJson(objetoTeste));