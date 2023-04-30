const express = require("express");
const app = express();
const cursos = require("./datos/cursos.js");
// router
const routerProgramacion = require("./routers/routerProgra.js");
app.use('/api/cursos/programacion',routerProgramacion)

const routerMatematicas = require("./routers/routerMath.js");
app.use('/api/cursos/matematicas',routerMatematicas)
//Routing
app.get("/", (req, res) => {
  res.send("Mi primer servidor. Bienvenido a mi API");
});

const PUERTO = process.env.PORT || 3000; // 3000: puerto por default en desarrollo
//en un entorno de produccion, el puerto debe ser asignado por el proveedor de hosting
app.listen(PUERTO, () => {
  console.log(`el servidor esta escuchando en http://localhost:${PUERTO}`);
});
app.get("/api/cursos", (req, res) => {
  res.send(cursos);
});
// Programacion

// Matematicas
