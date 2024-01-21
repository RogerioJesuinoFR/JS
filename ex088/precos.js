/*Dado um array de preços de produtos, calcule o preço total após adicionar 10% de imposto a cada produto usando map(), e depois somando tudo em reduce().*/

function calculeTotalComTaxa(precos){
    return precos.map(preco => preco*1.10).reduce((acc, curr) => acc + curr, 0);
}

const precos = [10,20,30,40];
console.log(calculeTotalComTaxa(precos));