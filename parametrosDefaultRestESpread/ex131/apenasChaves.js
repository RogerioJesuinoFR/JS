/*Implemente uma função que aceite dois arrays. O primeiro array é uma lista de objetos com uma chave e valor, e o segundo é uma lista de chaves. A função deve retornar um novo array de objetos contendo apenas as chaves especificadas no segundo array*/

function filtrarPorChaves(arrayObjetos, chaves){
    return arrayObjetos.map(obj => {let novoObj = {}; chaves.forEach(chave => {if(obj[chave] !== undefined) novoObj[chave] = obj[chave];});
    return novoObj;
 });
}

const data = [{nome: "Lucas", idade: 30, cidade: "São Paulo"},{nome: "Ana", idade: 25}];
console.log(filtrarPorChaves(data, ["nome", "cidade"]));