const http = require('http');
const cursos = require('./cursos.js');

const servidor = http.createServer((req, res) => {
    const {method}= req;//sintaxis de desestructuracion
    switch (method) {
        case 'GET': 
            return manejarSolicitudGet(req, res);
        case 'POST':
            return manejarSolicitudPost(req, res);
        default:
            res.statusCode = 501;
            res.end(`El metodo ${method} no puede ser manejado por el servidor`);
    }

});

function manejarSolicitudGet(req, res){
    const path = req.url;
    if(path === '/'){ //si estamos en la pagina principal...
        // statusCode por default es 200
        res.end('Bienvenido a mi primer servidor y API con Node.js usando routing');
    } else if(path === '/cursos'){
        res.end(JSON.stringify(cursos));
    }else if(path === '/cursos/programacion'){
        res.end(JSON.stringify(cursos.programacion));
    }else{
        res.statusCode = 404;
        res.end('El recurso no existe')
    }
    
}
function manejarSolicitudPost(req, res){
    const path = req.url;
    if(path === '/cursos/programacion'){ //solo se puede agregar un curso de programacion
        let cuerpo='';
        req.on('data',contenido =>{
            cuerpo += contenido.toString();
        });
        req.on('end',()=>{
            console.log(cuerpo);
            console.log(typeof cuerpo);
            cuerpo = JSON.parse(cuerpo);//convertimos el string a un objeto
            console.log(typeof cuerpo);
            console.log(cuerpo.titulo)
            res.end('Se ha recibido una solicitud POST para agregar un curso de programacion');
        });
        
    }else{
        res.statusCode = 404;
        res.end('El recurso no existe');
    }
}

const PUERTO = 3000;

servidor.listen(PUERTO, () => {
    console.log(`El servidor esta escuchando en http://localhost: ${PUERTO}`);
});