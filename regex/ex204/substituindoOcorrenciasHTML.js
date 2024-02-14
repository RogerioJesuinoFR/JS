//Substitua todas as ocorrências de tags HTML <tag> por [tag] em um texto fornecido.

function replaceHtmlTags(text){
    const regex = /<(\w+)>(.*?)<\/\1>/g;
    return text.replace(regex, '[$1]$2[/$1]');
}

console.log(replaceHtmlTags("<div>Hello</div>"));