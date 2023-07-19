// 1 Importar libreria
const express = require("express");

// 2 Instancias Express
const app = express();

// Tiene la capacidad de procesar json
app.use(express.json());
// 3(Iniciar servidor)
//GET, POST, PUT , DELETE

app.get("/", function (req, res) {
  // res.send("Hola");
  res.json({ nombre: "juan" });
  //  res.
});

app.get("/usuarios", function (req, res) {
  // res.send("Hola");
  res.send("Bienvenidos usuarios ");
  //  res.
});

app.post("/usuarios", function (req, res) {
  let nombre = req.body.nombre;
  let edad = req.body.edad;
  res.send(`Nombre: ${nombre} Edad: ${edad}`);
});

app.delete("/usuarios", function (req, res) {
  let nombre = req.body.nombre;
  let edad = req.body.edad;
  res.send(`Nombre: ${nombre} Edad: ${edad}`);
});

app.put("/usuarios", function (req, res) {
  let nombre = req.body.nombre;
  let edad = req.body.edad;
  res.send(`Nombre: ${nombre} Edad: ${edad}`);
});

app.listen(5000, function () {
  console.log("Servidor iniciado... en puerto 5000");
});
