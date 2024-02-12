/*Use um gerador para criar um iterador que reproduza o comportamento da função zip do python*/

function *zip(...iterables){
    const iterators = iterables.map(iterable => iterable[Symbol.iterator]());
    while(true){
        const items = iterators.map(iterator => iterator.next());
        if(items.some(item => item.done)) break;
        yield items.map(item => item.value);
    }
}

const a = [1,2,3];
const b = ['a','b','c'];
console.log([...zip(a,b)]);