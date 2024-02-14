//Remova todos os comentários HTML de uma string fornecida.

function removeHtmlComments(text){
    const regex = /<!--[\s\S]*?-->/g;
    return text.replace(regex, '');
}

console.log(removeHtmlComments("Hello <!--this is a comment -->World"));