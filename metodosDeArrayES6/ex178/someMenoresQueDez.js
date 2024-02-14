function somaMenoresQueDez (numeros){
    return numeros.some(n => n < 10);
}

console.log(somaMenoresQueDez([15,20,25]));
console.log(somaMenoresQueDez([5,20,25]));

//método some verifica se pelo menos um número no array é menor que 10
