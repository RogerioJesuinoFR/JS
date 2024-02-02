/*Escreva uma arrow function que retorne uma mensagem personalizada, dadas as propriedades "nome" e "idade" de um objeto*/

const mensagem = ({nome, idade}) => `Olá, meu nome é ${nome} e eu tenho ${idade} anos de idade.`;

console.log(mensagem({nome: "Giovana", idade: 20}));