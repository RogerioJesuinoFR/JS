/*Escreva uma função que aceite uma função de callback e um número, e execute a função de callback após um certo número de milissegundos especificados pelço número*/

function executarDepois(callback, tempo){

    //A função executarDepois usa a função setTimeout do JavaScript, que executa uma função de callback após um certo número de milissegundos. O primeiro argumento para setTimeout é a função de callback a ser executada, e o segundo argumento é o número de milissegundos antes da execução da função de callback
    
    setTimeout(callback, tempo);
}

let callback = () => console.log("Executado!");

executarDepois(callback, 2000);