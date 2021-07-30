'use strict'

const express = require('express');

const app = express();
const port = process.env.PORT || 3000;

app.get('/', function(request, response) {
    response.send(`
        <html>
            <head></head>
            <body>
                <p>Welcome to Home!</p>
            </body>
        </html>
    `);
});

app.listen(port);