/*Implemente um gerador que simule a funcionalidade de enumerate do python*/

function *enumerate(iterable){
    let index = 0;
    for (const value of iterable){
        yield [index, value];
        index++;
    }
}

const letters = ['a','b','c'];
console.log([...enumerate(letters)]);