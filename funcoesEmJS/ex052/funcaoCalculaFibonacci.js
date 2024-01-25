/*Escreva uma função que calcule o n-ésimo número de Fibonacci*/

function calculaFibonacci(n){
    let num1 = 0;
    let num2 = 1;

    for(let i = 2; i <= n; i++){
        let temp = num1;
        num1 = num2;
        num2 = temp + num1;
    }
    return num2;
}

console.log(`O numero é o ${calculaFibonacci(7)}`);