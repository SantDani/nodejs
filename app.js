const express = require("express");
const app = express();
const port = 3000;

//import salutes
const salute = require('./public/salute/salute');

salute._english();
salute._russian();
salute._spanish();




// Routing
app.get("/", (req, res) => {
    res.send("Hello World!");
});

app.use(express.static(__dirname + "/public"));

app.get("/contacto", (req, res) => {
    res.send("ruta de contacto" + __dirname);
});

app.use((req, res, next) => {
    // res.status(404).send("Sorry cant find that!");
    res.status(404).sendFile(__dirname + "/public/404.html");
});


app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});


