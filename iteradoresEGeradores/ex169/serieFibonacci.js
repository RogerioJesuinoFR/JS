/*Crie um gerador que gere uma série fibonacci até um número máximo n.*/

function *fibonacci(n){
    let [prev, curr] = [0, 1];
    while (curr <= n){
        yield curr;
        [prev, curr] = [curr, prev + curr];
    }
}

console.log([...fibonacci(100)]);