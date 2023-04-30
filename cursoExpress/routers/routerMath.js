const express = require("express");
const {matematicas}=require('../datos/cursos.js');
const routerMatematicas = express.Router();

routerMatematicas.get("/", (req, res) => {
  res.send(matematicas);
});
routerMatematicas.get("/:tema", (req, res) => {
  const tema = req.params.tema;
  const r = matematicas.filter((curso) => curso.tema === tema);
  if (r.length === 0)
    return res
      .status(404)
      .send(`No se encontraron cursos con el tema:  ${tema}`);
  res.send(JSON.stringify(r));
});
module.exports = routerMatematicas;