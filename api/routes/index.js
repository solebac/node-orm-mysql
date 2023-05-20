//ponto de entrada das rotas
const bodyParser = require("body-parser");

//Export Funciont app de
module.exports = (app) => {
  app.use(bodyParser.json());
  app.get("/", (req, res) => res.send("Olá Mundo...!"));
};
