function dobraValores(numeros){
    return numeros.map(n => n*2);
}

console.log(dobraValores([1,2,3,4]));

//método map individualisa cada um dos elementos, aplica as condições e depois retorna um novo vetor com os novos números