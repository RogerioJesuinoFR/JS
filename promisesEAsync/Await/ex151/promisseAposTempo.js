/*Implemente uma função que retorne uma promise que resolve após um tempo específico em milissegundos*/

function delay (ms){
    return new Promise(resolve => setTimeout(resolve, ms));
}

console.log("Inicio");
delay(1000).then(() => console.log('Resolvido após 1 segundo!'));