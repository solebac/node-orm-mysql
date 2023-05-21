//ponto de entrada das rotas
const bodyParser = require("body-parser");

const pessoas = require("./pessoasRoute");
const niveis = require("./niveisRoute");
const turmas = require("./turmasRoute");

//Export Funciont app de
module.exports = (app) => {
  // app.use(bodyParser.json());
  // app.use(pessoas);
  app.use(
    bodyParser.json(),
    bodyParser.urlencoded({ extended: false }), //Quando o cliente manda dados via form payload, esse pacote ele formata e transforma os dados para o formato de objeto javascript e joga tudo isso em um objeto dentro do objeto de requisição (req): req.body.
    pessoas,
    niveis,
    turmas
  );
  app.get("/", (req, res) =>
    res.send({
      message: "Você se conectou em mais um sistema produzidos por Flávio...!",
    })
  );
};
