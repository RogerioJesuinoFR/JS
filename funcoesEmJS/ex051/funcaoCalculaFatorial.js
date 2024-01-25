/* Escreva uma função que calcule o fatorial de um número*/

function calculaFatorial(num){
    let fat = 1;
    for(let i = 2;i <=  num;i++){
        fat *= i;
    }
    return fat;
}

console.log(`O Fatorial é ${calculaFatorial(4)}`);