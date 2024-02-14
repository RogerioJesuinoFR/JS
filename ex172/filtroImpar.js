function filtraImpares(numeros){
    return numeros.filter(n => n % 2 !== 0);
}

console.log(filtraImpares([1,2,3,4,5]));
console.log(filtraImpares([10,12,15]));

//retorna vetor com os números que atenderem as condições