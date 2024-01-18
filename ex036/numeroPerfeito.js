/*Usando um laço for, imprima todos os números perfeitos de 1 a 100 (um número é perfeito se a soma de seus divisores, incluindo 1 mas não ele mesmo, é igual ao próprio número)*/

for(let i = 1; i <= 100; i++){
    let soma = 0;
    for(let j = 1;j < i; j++){
        if( i % j === 0){
            soma += j;
        }
    }
    if(soma === i){
        console.log(i);
    }
}