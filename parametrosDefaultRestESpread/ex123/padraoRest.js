/*Desenvolva uma função que utilize o parâmetro rest para receber um número indefinido de argumentos e retorne a soma de todos eles*/

function soma(...nums){
    return nums.reduce((acc, curr) => acc + curr, 0);
}

console.log(soma(1,2,3,4));
console.log(soma(5,5,10));