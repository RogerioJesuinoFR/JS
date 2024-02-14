//Verifique se um texto possui palavras repetidas consecutivas.

function hasConsecutiveRepeats(text){
    const regex = /\b(\w+)\b\s+\b\1\b/i;
    return regex.test(text);
}

console.log(hasConsecutiveRepeats("Hello hello world"));
console.log(hasConsecutiveRepeats("Hello world"));