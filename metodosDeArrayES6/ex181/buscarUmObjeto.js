function encontraMaisVelhoQue20 (pessoa){
    return pessoa.find(pessoa => pessoa.idade > 20);
}

const exemploDePessoas = [
    {nome: 'Alice', idade: 18},
    {nome: 'Bob', idade: 21},
    {nome: 'Charlie', idade: 19}
];

console.log(encontraMaisVelhoQue20(exemploDePessoas));