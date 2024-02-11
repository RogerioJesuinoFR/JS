/*Crie uma função assíncrona que simule a busca de dados de um banco de dados e lance um erro se a entrada for uma string específica*/

async function fetchData(input){
    if(input === "error"){
        throw new Error("Entrada inválida!");
    }
    return `Dados para ${input}`;
}

fetchData("data").then(data => console.log(data)).catch(err => console.error(err.message));

fetchData("error").then(data => console.log(data)).catch(err => console.error(err.message));