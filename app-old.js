const http = require('http');
//crear servidor
http.createServer((req, res) => {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        let salida = {
            nombre: 'Guille',
            edad: 18,
            url: req.url
        }
        res.write(JSON.stringify(salida));
        //res.write("Hola Mundo");
        res.end();
    })
    .listen(8080);
console.log('Escuchando puerto 8080');