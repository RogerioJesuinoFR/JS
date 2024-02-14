function fazIncludes(array, elemento){
    return array.includes(elemento);
}

console.log(fazIncludes(['a', 'b', 'c'], 'b'));
console.log(fazIncludes(['a', 'b', 'c'], 'z'));

//método includes verifica a existência de um elemento específico dentro de um array