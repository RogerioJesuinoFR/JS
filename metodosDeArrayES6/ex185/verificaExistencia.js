function encontraDivisivelPor5 (numeros){
    return numeros.findIndex(n => n % 5 === 0);
}

console.log(encontraDivisivelPor5([2,4,7,10,11]));