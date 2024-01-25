/*Escreva uma função que aceite uma string como argumento e retorne a string invertida*/

function inverteString(palavra){
    return palavra.split("").reverse().join("");

    //split("") é uma função nativa do JS que divide a string em um array de substrings, onde cada caractere da string original se torna um elemento do array. O argumento passado para `split`é uma string vazia(`""`), o que significa que cada caractere da string original se tornará um elemento separado no array

    //reverse() inverte a ordem dos elementos no array.
    
    //join("") junta os elementos do array de volta em uma única string. O argumento para join é novamento uma string vazia(`""`), o que significa que os elmentos do array são concatenados sem nenhum caractere entre eles.
}
console.log(`A string invertida é ${inverteString('hello')}`);
