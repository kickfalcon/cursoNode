const express = require("express");
const {programacion} = require('../datos/cursos.js');
const routerProgramacion = express.Router();

routerProgramacion.get("/", (req, res) => {
  res.send(programacion);
});
routerProgramacion.get("/:lenguaje", (req, res) => {
  //parametro de url, se pone despues de :
  const lenguaje = req.params.lenguaje; //para obtener el parametro de lenguaje
  const resultados = programacion.filter(
    (curso) => curso.lenguaje === lenguaje
  ); //filtra los cursos que tengan el lenguaje que se paso como parametro
  if (resultados.length === 0)
    return res.status(404).send(`No se encontraron cursos de ${lenguaje}`);
  if (req.query.ordenar === "vistas")
    return res.send(
      JSON.stringify(resultados.sort((a, b) => a.vistas - b.vistas))
    );
  res.send(JSON.stringify(resultados));
});
routerProgramacion.get("/:lenguaje/:nivel", (req, res) => {
  const lenguaje = req.params.lenguaje;
  const nivel = req.params.nivel;
  const r = programacion.filter(
    (curso) => curso.lenguaje === lenguaje && curso.nivel === nivel
  );
  if (r.length === 0)
    return res
      .status(404)
      .send(
        `No se encontraron cursos de ${lenguaje} correspondientes al nivel ${nivel}`
      );
  res.send(JSON.stringify(r));
});
module.exports = routerProgramacion;