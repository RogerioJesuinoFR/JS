/* Usando um laço for, imprima os primeiros 10 números da sequência de fibonacci */

let num1 = 0;
let num2 = 1;
console.log(num1);
console.log(num2);
for(let i = 2; i < 10; i++){
    let proxNum = num1 + num2;
    console.log(proxNum);
    num1 = num2;
    num2 = proxNum;
}