# Curso Node

Curso tomado en FreeCodeCamp para aprender a utilizar NodeJS, el cual es un 'entorno' por decirlo de alguna manera que facilita la escritura de código JS para su uso en el desarrollo backend

## Primera Parte

Se da a conocer información referente a: 

* Node modules

  * os
  * fs
  * timers
* npm
* json
* Events

  * asynchronous
  * synchronous
  * Promises
  * Callback functions

Esto con el fin de tener los conocimientos básicos y esenciales para poder comprender lo que se estaba haciendo en cada línea de código.

## Parte dos

Durante esta parte, se dieron a conocer: 

* Client-server model
* HTTP responses
* HTTP methods (GET, POST,PUT, PATCH, DELETE)
* HTTP status codes
* crear server con NodeJS
* Nodemon
* Estructura de una URL
* Routing
* Conceptos
  * CRUD
  * REST
  * API
* Express
* Query parameters
* Middleware

## Express

Es un framework utilizado para facilitar el desarrollo del servidor basado en NodeJs, permite pasar de 

```
const servidor = http.createServer((req, res) => {
    const {method}= req;
    switch (method) {
        case 'GET': 
            return manejarSolicitudGet(req, res);
        default:
            res.statusCode = 501;
            res.end(`El metodo ${method} no puede ser manejado por el servidor`);
    }

});

function manejarSolicitudGet(req, res){
    const path = req.url;
    if(path === '/'){ 
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
```

a esto: 

```
routerProgramacion.get("/:lenguaje", (req, res) => {
  const lenguaje = req.params.lenguaje; 
  const resultados = programacion.filter(
    (curso) => curso.lenguaje === lenguaje); 
  if (resultados.length === 0)
    return res.status(404).send(`No se encontraron cursos de ${lenguaje}`);
  if (req.query.ordenar === "vistas")
    return res.send(
      JSON.stringify(resultados.sort((a, b) => a.vistas - b.vistas))
    );
  res.send(JSON.stringify(resultados));
});
```

Es decir, permite optimizar el código de manera impresionante, haciendo más rápida la comunicación, facilita el mantenimiento y ahorra mucho tiempo.

## Nodemon

Es una herramienta que permite correr el servidor creado en Node, sin necesidad de estarlo cerrando cada que se realiza un cambio, algo similar a la extension de *live server* que tiene VS para HTML.
