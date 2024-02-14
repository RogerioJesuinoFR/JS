function positivos(numeros){
    return numeros.every(n => n > 0);
}

console.log(positivos([1,2,3]));
console.log(positivos([-1,2,3]));