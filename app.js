'use strict'

const express = require('express');
const port = process.env.PORT || 3000;

const app = express();

// When search 'assets' it's redirection to 'static' folder that contain the CSS
app.use('/css', express.static(__dirname + '/static/css'));


app.get('/champ/:id/', function(req, res) {
    res.send(`
        <html>
            <head>
                <!-- Import main.css-->
                <link rel="stylesheet" href="/css/main.css" />
            </head>
            <body>
                El campeon es ${req.params.id}
            </body>
        </html>
    `);
});

// go to the URL http://localhost:3000/champ/nami
app.listen(port);