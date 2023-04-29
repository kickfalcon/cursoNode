const http = require('http'); //importamos el modulo http
const servidor = http.createServer((req, res) => {
    //req y res representan la petición y la respuesta, es decir, la solicitud
   /* console.log(`===> req (solicitud)`);
    console.log(req.url);//nos da el path que seguimos despues de localhost:3000
    console.log(req.method)// get, post, put, delete, etc.
    console.log(req.headers);*/
    console.log(`===> res (respuesta)`);
    /*console.log(res.statusCode);
    res.statusCode = 404;
    console.log(res.statusCode);*/
    res.setHeader('Content-Type', 'application/json');
    console.log(res.getHeaders());
    res.end('Hola mundo'); //permite enviar la respuesta al cliente
});
const PUERTO = 3000;

servidor.listen(PUERTO,() => {
    console.log(`El servidor esta escuchando en http://localhost:${PUERTO}`);
});