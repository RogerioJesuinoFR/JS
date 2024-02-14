function filtraPares(numeros){
    return numeros.filter(n => n % 2 === 0);
}

console.log(filtraPares([1,2,3,4]));