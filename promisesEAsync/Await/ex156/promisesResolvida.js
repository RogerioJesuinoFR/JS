/*Crie uma função que aguarde várias Promises e retorne a primeira que for resolvida*/

function primeiraResolvida(promises){
    return Promise.race(promises);
}

const p1 = new Promise(resolve => setTimeout(() => resolve("Primeira"), 500));
const p2 = new Promise(resolve => setTimeout(() => resolve("segunda"), 1000));

primeiraResolvida([p1, p2]).then(result => console.log(result));