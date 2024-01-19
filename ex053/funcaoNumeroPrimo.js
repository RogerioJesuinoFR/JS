/*Escreva uma função que verifique se um número é primo*/

function verificaPrimo(num){
    for(let i = 2; i < num; i++){
        if(num % i === 0){
            return false;
        }
    }
    return num > 1;
}

console.log(verificaPrimo(7));