/*Implemente uma função assíncrona que use try/ catch para lidar com erros ao esperar uma promise*/

async function handleErrors (promise){
    try{
        const result = await promise;
        console.log(result);
    } catch (error){
        console.error(`Error: ${error.message}`);
    }
}

const successfulPromise = Promise.resolve("Sucesso!");
const failingPromise = Promise.reject(new Error("Falha!"));

handleErrors(successfulPromise);
handleErrors(failingPromise);