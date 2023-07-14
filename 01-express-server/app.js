const express = require("express");

const app = express();

app.get("/", function (req, res) {
  res.send("Bienvenido");
});

app.listen(5000, function () {
  console.log("Servidor iniciado...");
});
