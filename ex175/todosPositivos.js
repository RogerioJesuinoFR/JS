function todosPositivos(numeros){
    return numeros.every(n => n > 0);
}

console.log(todosPositivos([1,2,3,4,5]));
console.log(todosPositivos([-1,2,3,4,5]));

//retorna booleano caso atenda as condições