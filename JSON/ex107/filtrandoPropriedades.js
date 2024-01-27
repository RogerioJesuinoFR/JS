/*Filtrando propriedade ao converter para JSON*/

function filtrarEConverter (obj){
    return JSON.stringify(obj, ['nome','idade']);
}

const objetoTeste = {nome:"joão", senha: "12345", idade: 25};
console.log(filtrarEConverter(objetoTeste));