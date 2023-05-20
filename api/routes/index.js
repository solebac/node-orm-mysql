//ponto de entrada das rotas
const bodyParser = require("body-parser");
const pessoas = require("./pessoasRoute");

//Export Funciont app de
module.exports = (app) => {
  app.use(bodyParser.json());
  app.use(pessoas);
  app.get("/", (req, res) =>
    res.send({
      message: "Você se conectou em mais um sistema produzidos por Flávio...!",
    })
  );
};
