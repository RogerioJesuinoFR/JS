/*Implemente uma função que eceite um objeto e use o operador spread para criar uma cópia profunda desse objeto*/

function copiaProfunda (obj){
    return {...obj};
}

const original = {nome: "Lucas", idade: 20};
const copia = copiaProfunda(original);
console.log(copia);

original.nome = "Rafael";
console.log(copia.nome);
console.log(original.nome);