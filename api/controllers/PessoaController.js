//conexão com os models
//require('../models') significado que por default busca o index.js
const database = require("../models");

class PessoaController {
  static async pegaTodasAsPessoas(req, res) {
    try {
      //findAll o mesmo que [select * from pessoas]
      //-----------------------------------[Model(Pessoas)]
      const todasAsPessoas = await database.Pessoas.findAll();
      return res.status(200).json(todasAsPessoas);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }
}

//Disponibiliza para o restante do codigo
module.exports = PessoaController;
