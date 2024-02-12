/*Crie um gerador que retorne uma sequência aritmética*/

function *sequenciaAritmetica(a, d, n){
    for(let i = 0;i < n;i++){
        yield a;
        a += d;
    }
}

const sequence = sequenciaAritmetica(1,2,5);
console.log([...sequence]);