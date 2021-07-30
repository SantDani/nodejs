'use strict'

const http = require('http');
const fs = require('fs');

const fileHtml = __dirname + '/hello_world.tpl';
let json_content_helloWorld = '';

function setContentJSON(nameFile){
    json_content_helloWorld = __dirname + '/data/json/' + nameFile;
}

const myServer = http.createServer(function (request, response){
    
    // It's important the header with text/html. It's need the browser to know is HTML
    response.writeHead(200, {'Content-Type' : 'text/html'});
    let html = fs.readFileSync(fileHtml).toString();

    let getJSON = false;
    switch (request.url) {
        case "/":
        case "/inicio":
            setContentJSON('index.json');
            getJSON = true;
            break;
        case "/contacto":
            setContentJSON('contact.json');
            getJSON = true;
            break;
        default:
            setContentJSON('404.json');
            response.writeHead(302, {location:'https://http.cat/404/'});
            break;
    }

    if (getJSON) {
        let contentJSON = fs.readFileSync(json_content_helloWorld);
        let content_helloWorld = JSON.parse(contentJSON).content;

        content_helloWorld.forEach(function(content){
            html = html.replace(content.name, content.value);
        });
    }

    // .end() close and send response
    response.end(html);
});

myServer.listen(1111, '127.0.0.1');
