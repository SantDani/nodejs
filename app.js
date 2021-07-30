const http = require('http');
const fs = require('fs');

const fileHtml = __dirname + '/hello_world.tpl';
const title = 'Welcome to league of Title';
const text = 'Welcome to league of text';

const TITLE = '%title%';
const TEXT = '%text%';

const myServer = http.createServer(function (request, response){
    
    // It's important the header with text/html. It's need the browser to know is HTML
    response.writeHead(200, {'Content-Type' : 'text/html'});
    const html = fs.readFileSync(fileHtml).toString()
        .replace(TITLE, title)
        .replace(TEXT, text);
    // .end() close and send response
    response.end(html);
});

myServer.listen(1111, '127.0.0.1');
