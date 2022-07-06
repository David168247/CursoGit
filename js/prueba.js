

const { write } = require("fs");
const http = require("http");

http.createServer(function (req,res) {
    res.write(`<h1>Hola como estas?</h1>`)

    res.end()
})

.listen(8080);
console.log('Servido web iniciado');
