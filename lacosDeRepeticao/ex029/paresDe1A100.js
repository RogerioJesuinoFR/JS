/* Usando um laço do-while, imrpima todos os números pares de 1 a 100*/

function imprimeParesUmACem(){
    let i = 1;
    do{
        if(i % 2 == 0){
            console.log(i);
        }
        i++;
    }while(i <=100);
}

imprimeParesUmACem();