/*Manipulando valores ao converter para JSON*/

function alterarEConverter(obj){
    const alterarValor = (chave, valor) => {
        if(chave === "idade") return valor + 1;
        return valor;
    }
    return JSON.stringify(obj, alterarValor);
}

const objetoTeste = {nome:"João", idade: 25};
console.log(alterarEConverter(objetoTeste));
