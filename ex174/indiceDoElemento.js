function encontraElemento(strings){
    return strings.findIndex(s => s === "JavaScript");
}

console.log(encontraElemento(["Java", "Python", "JavaScript", "C++"]));

//retorna o indice do elemento que atingir as condições