/*Implemente um gerador que atue como uma paginação para um array, retornando os itens em lotes*/

function *paginacao(array, batchSize){
    for(let i = 0;i < array.length;i += batchSize){
        yield array.slice(i,i + batchSize);
    }
}

const itens = [1,2,3,4,5,6,7,8,9,10];
const pages = paginacao(itens, 4);
console.log(pages.next().value);