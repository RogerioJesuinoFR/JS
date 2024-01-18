/*Usando um laço for, imprima todos os números primos de 1 a 100.*/

function imprimePrimos(){
    for(let num = 2;num <= 100;num++){
        let ePrimo = true;
        for(let div = 2; div < num; div++){
            if(num % div == 0){
                ePrimo = false;
                break;
            }
        }
        if(ePrimo){
            console.log(num);
        }
    }
}

imprimePrimos();