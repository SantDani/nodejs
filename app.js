'use strict'

const express = require('express');
const port = process.env.PORT || 3000;

const app = express();

// When search 'assets' it's redirection to 'static' folder that contain the CSS
app.use('/css', express.static(__dirname + '/static/css'));


app.get('/champ/:id', function(req, res) {
    res.render('champ.ejs', {id: req.params.id})
});

// go to the URL http://localhost:3000/champ/nami
app.listen(port);