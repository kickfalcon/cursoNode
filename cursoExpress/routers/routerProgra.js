const express = require("express");
const { programacion } = require("../datos/cursos.js");
const routerProgramacion = express.Router();
// Middleware
routerProgramacion.use(express.json()); //permite procesar la informacion en formato json

routerProgramacion.get("/", (req, res) => {
  res.send(programacion);
  // res.json(programacion); //envia la respuesta en formato json
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
routerProgramacion.post("/add", (req, res) => {
  let cursoNuevo = req.body;
  programacion.push(cursoNuevo);
  res.send(programacion); // send ya envia la respuesta en formato json
});
routerProgramacion.put('/update/:id',(req,res) =>{
  const cursoActualizado = req.body;
  const id = req.params.id; //obtenemos el id del curso a actualizar
  const indice = programacion.findIndex(curso => curso.id == id); //obtenemos el indice del curso a actualizar
  if(indice >= 0)
    programacion[indice] = cursoActualizado;
  res.send(programacion);
});
routerProgramacion.patch('/:id',(req,res) =>{
  //permite actualizar campos especificos de un objeto
  const infoActualizada = req.body;
  const id = req.params.id;
  const indice = programacion.findIndex(curso => curso.id == id);
  if(indice >= 0){
    const cursoModificar = programacion[indice];
    Object.assign(cursoModificar, infoActualizada);// assign: modifca solo algunas propiedades del objeto
  }
  res.send(programacion);
});
routerProgramacion.delete('/delete/:id',(req,res) =>{ 
  const id = req.params.id;
  const indice = programacion.findIndex(curso => curso.id == id);
  if(indice >= 0){
    programacion.splice(indice,1); // elimina un elemento del arreglo
  }
  res.send(programacion);
});

module.exports = routerProgramacion;
