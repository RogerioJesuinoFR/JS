/*Desestruturação com renomeação de variáveis*/

function renomeiaVariaiveis(objeto){
    const {a: alpha, b: beta} = objeto;
    return {alpha, beta};
}

const objeto = {a: 1, b: 2};
console.log(renomeiaVariaiveis(objeto))