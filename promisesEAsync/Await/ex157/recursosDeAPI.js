/*Crie uma função async que simule a recuperação de dois recursos de API em sequência, onde o segundo requer dados do primeiro*/

async function fetchSequentialData (firstURL, secondURLGenerator){
    let firstData = await fetchDataFromAPI(firstURL);
    let secondURL = secondURLGenerator(firstData);
    return await fetchDataFromAPI(secondURL);
}

fetchSequentialData("Https://api.example.com/first", data => `https://api.example.com/second/${data.id}`).then(result => console.log(result)).catch(error => console.error(error.message));