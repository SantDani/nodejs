'use strict'

const express = require('express');

const app = express();
const port = process.env.PORT || 3000;

app.get('/champ/:id/', function(req, res) {
    res.send(`
        <html>
            <head></head>
            <body>
                El campeon es ${req.params.id}
            </body>
        </html>
    `);
});

// go to the URL http://localhost:3000/champ/nami
app.listen(port);