//Extraia o nome do domínio de uma URL.

function extractDomain(url){
    const regex = /^(?:https?:\/\/)?(?:www\.)?([^\/]+)/i;
    const match = url.match(regex);
    return match?match[1]:'';
}

console.log(extractDomain("https://www.example.com/page"));