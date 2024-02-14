//Extraia todos os números de telefone válidos de um texto. Considere formatos como (xx) XXXX-XXX e XX-XXXXX-XXXX.

function extractPhoneNumbers(text){
    const regex = /\(?\d{2}\)?[-.\s]?\d{4,5}[-.\s]?\d{4}/g;
    return text.match(regex) ||[];
}

console.log(extractPhoneNumbers("Contact at (12) 34567-8901 or 12-3456-7890."));