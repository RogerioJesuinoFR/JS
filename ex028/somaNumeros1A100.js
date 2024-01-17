/* Usando um laço while, calcule e imprima a soma de todos os números de 1 a 100*/

function imprimeSoma(){
    let j = 0;
    let i = 1;
    while(i <= 100){
        j += i;
        i++;
    }
    console.log("A soma é ", j);
}

imprimeSoma();