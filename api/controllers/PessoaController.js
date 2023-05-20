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

  static async pegaOnePessoa(req, res) {
    const { id } = req.params; //Parametro na URL
    try {
      const onePessoa = await database.Pessoas.findOne({
        where: { id: Number(id) },
      });
      return res.status(200).json(onePessoa);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  static async createPessoa(req, res) {
    const newPessoa = req.body;
    try {
      const newPessoaCreate = await database.Pessoas.create(newPessoa);
      return res.status(200).json(newPessoaCreate);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  static async updatePessoa(req, res) {
    const { id } = req.params;
    const newUpdatePessoa = req.body;
    try {
      await database.Pessoas.update(newUpdatePessoa, {
        where: { id: Number(id) },
      });
      const pessoaUpdate = await database.Pessoas.findOne({
        where: { id: Number(id) },
      });
      return res.status(200).json(pessoaUpdate);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  static async deletePessoa(req, res) {
    const { id } = req.params; //Parametro na URL
    try {
      const onePessoa = await database.Pessoas.destroy({
        where: { id: Number(id) },
      });
      return res
        .status(200)
        .json({ message: `Registro ${id} removido com sucesso...!` });
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }
}

//Disponibiliza para o restante do codigo
module.exports = PessoaController;
