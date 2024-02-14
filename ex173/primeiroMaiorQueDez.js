function encontraMaiorQueDez (numeros){
    return numeros.find(n => n > 10);
}

console.log(encontraMaiorQueDez([1,2,12,8,15]));

//retorna o elemento que atingir as condições