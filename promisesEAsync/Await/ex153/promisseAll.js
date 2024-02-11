/*Use o Promise.all para aguardar várias Promises e retornar seus resultados em um array.*/

function promise1(){
    return new Promise (resolve => setTimeout(() => resolve("Resultado 1"),1000));
}

function promise2(){
    return new Promise (resolve => setTimeout(() => resolve("Resultado 2"), 1500));
}

Promise.all([promise1(), promise2()]).then(results => console.log(results)).catch(err => console.error(err.message));