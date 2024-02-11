/*Utilize async/await em um loop para processar uma série de chamadas de API em sequência*/

async function processInSequence (urls){
    let results = [];
    for(let url of urls){
        let data = await fetchDataFromAPI(url);
        results.push(data);
    }
    return results;
}

const urls = ["https://api.example.com/data1", "https://api.example.com/data2"];
processInSequence(urls).then(data => console.log(data)).catch(err => console.error(err.message));