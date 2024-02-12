/*Crie um gerador que reproduza o comportamento da função range do python*/

function *range(start, stop = null, step = 1){
    if(stop === null){
        stop = start;
        start = 0;
    }

    for(let i = start;i < stop;i += step){
        yield i;
    }
}

console.log([...range(5)]);
console.log([...range(2, 5)]);
console.log([...range(0, 10, 2)]);