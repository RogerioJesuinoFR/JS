/*Crie um gerador que retorne números primos*/

function *geraPrimos(){
    function ePrimo(num){
        for(let i = 2;i * i <= num;i++)
        if(num % i === 0) return false;
        return num > 1;
    }

    let num = 2;
    while (true){
        if(ePrimo(num)) yield num;
        num++;
    }
}

const primos = geraPrimos();
console.log(primos.next().value);
console.log(primos.next().value);
console.log(primos.next().value);
console.log(primos.next().value);