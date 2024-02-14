// Extraia todas as URLs válidas de um texto fornecido.

function extractUrls(text){
    const regex = /(https?:\/\/[^\s]+)/g;
    return text.match(regex) || [];
}

console.log(extractUrls("Veja estes links https://www.example.com e http://test.com"));