const express = require("express");
const routes = require("./routes"); //introduzui index.js

//Inicializar o express
const app = express();
const port = process.env.PORT || 3000;

routes(app); //Recarrega e re-seleciona a nova rota

app.listen(port, () => {
  console.log("Conectado...!");
});

module.exports = app;
