/*Utilize o async/await dentro de um método de classe para simular o carregamento de dados para essa classe*/

class DataLoader{
    constructor(apiURL){
        this.apiURL = apiURL;
        this.data = null;
    }

    async loadData(){
        this.data = await fetchDataFromAPI(this.apiURL);
    }
}

const loader = new DataLoader("https://api.example.com/data");
loader.loadData().then(() => console.log(loader.data)).catch(err => console.log(err.message));