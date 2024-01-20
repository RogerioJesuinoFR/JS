/*Escreva uma função que receba um número e retorne um array com todos os números primos até aquele número*/

function primosAteN(num){
    let primos = [];
    for(let i = 2;i <= num;i++){
        if(ePrimo(i)){
            primos.push(i);
        }
    }
    return primos;
}

function ePrimo(num){
    for(let i = 2;i < num; i++){
        if(num % i === 0){
            return false;
        }
    }
    return num > 1;
}

console.log(primosAteN(10));