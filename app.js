const http = require('http');

const myServer = http.createServer(function (request, response){

    response.writeHead(200, {'Content-Type' : 'text/plain'});
    // .end() close and send response
    response.end('Hello World! This is OP.');
});

myServer.listen(1111, '127.0.0.1');
