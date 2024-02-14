//Extraia todas as tags e seus respectivos conteúdos de uma string HTML.

function extractTagsAndContent(html){
    const regex = /<(\w+)>([^<]+)<\/\1>/g;
    let match;
    const result = {};

    while ((match = regex.exec(html)) !== null){
        result[match[1]] = match[2];
    }

    return result;
}

console.log(extractTagsAndContent("<div>Hello</div><p>World</p>"));