/*Usando um laço do-while, crie  um jogo de "Pedra, papel e tesoura" contra o computador*/

let escolhaUsuario = "pedra";
let escolhaComputador;
let resultado;

// função math.floor arredonda para baixo
//função math.random gera um número DECIMAL aleatório entre 0 e 1
// Math.floor(Math.random()*3) significa que será gerado um numero decimal aleatório entre 0 e 1 multiplicado por 3 e o resultado dessa multiplicação será arredondado para baixo, ou seja, serão gerados números entre 0, 1 e 2

do{
    let aleatorio = Math.floor(Math.random()*3);
    switch (aleatorio){
        case 0:
            escolhaComputador = "pedra";
            break;
        case 1:
            escolhaComputador = "papel";
            break;
        default:
            escolhaComputador = "tesoura";
    }

    if((escolhaUsuario === "pedra" && escolhaComputador === "tesoura")||(escolhaUsuario === "papel" && escolhaComputador === "pedra")||(escolhaUsuario === "tesoura" && escolhaComputador === "papel")){
        resultado = "Usuário ganhou!";
    }
    else if(escolhaUsuario === escolhaComputador) {
        resultado = "Empate!";
    }
    else {
        resultado = "Computador ganhou!";
    }
    console.log("Usuário: " + escolhaUsuario + "- Computador:" + escolhaComputador + "- Resultado:" + resultado);
}while(resultado === "Empate!");