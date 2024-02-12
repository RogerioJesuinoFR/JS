/*Crie um iterador que gera uma sequência Fibonacci.*/

function *fibonacci(){
    let [prev, curr] = [0, 1];
    while (true){
        yield curr;
        [prev, curr] = [curr, prev + curr];
    }
}

const fib = fibonacci();
console.log(fib.next().value);
console.log(fib.next().value);
console.log(fib.next().value);
console.log(fib.next().value);
