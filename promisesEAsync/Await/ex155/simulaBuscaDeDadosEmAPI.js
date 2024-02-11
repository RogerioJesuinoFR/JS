/*Implemente uma função async que simule a operação de busca de dados em uma API. Se o status da resposta for 2000, a função deve retornar os dados, caso contrário, deve lançar um erro*/
async function fetchDataFromAPI(url){
    let response = await fetch(url);
    if(response.status !== 200){
        throw new Error("Falha na obtenção dos dados");
    }
    return await response.json();
}

fetchDataFromAPI("https://api.example.com/data").then(data => console.log(data)).catch(err => console.log(err.message));