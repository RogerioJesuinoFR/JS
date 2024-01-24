/*Dado um array de strings, retorne uma única string que é a concatenação de todas as strings so array, separadas por vírgula*/

function concatenaStrings(arr){
    return arr.join(",");
}

const strings = ["Meu nome é Rogerio", "Tenho 23 anos", "Estou aprendendo JavaScript"];

console.log(concatenaStrings(strings));
