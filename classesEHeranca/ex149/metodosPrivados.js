/*Classe com métodos privados*/

class Segredo{
    #mensagemSecreta = "Esta é uma mensagem secreta!";

    revelarSegredo(){
        return this.#mensagemSecreta;
    }
}

const segredo = new Segredo();
console.log(segredo.revelarSegredo());