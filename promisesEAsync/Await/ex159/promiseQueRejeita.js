/*Crie uma função que retorna uma Promise que rejeita após um tempo específico em milissegundos*/

function rejectAfterDelay(ms){
    return new Promise ((_,reject) => setTimeout(() => reject(new Error("Rejeitado após timeout!")), ms));
}

rejectAfterDelay(1000).catch(err => console.error(err.message));