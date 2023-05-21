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

  //localhost:3000/pessoas/1/matriculas/5
  //localhost:3000/pessoas/:estudanteId/matriculas/:matriculaId
  static async pegaOneMatricula(req, res) {
    const { estudanteId, matriculaId } = req.params; //Parametro na URL
    try {
      const oneMatricula = await database.Matriculas.findOne({
        where: { id: Number(matriculaId), estudante_id: Number(estudanteId) },
      });
      return res.status(200).json(oneMatricula);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  //localhost:3000/pessoas/2/matriculas
  static async createMatricula(req, res) {
    const { estudante_id } = req.params;
    const newMatricula = { ...req.body, estudante_id: Number(estudante_id) };
    try {
      const newMatriculaCreate = await database.Matriculas.create(newMatricula);
      return res.status(200).json(newMatriculaCreate);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  static async updateMatricula(req, res) {
    const { estudanteId, matriculaId } = req.params; //Parametro na URL
    const newUpdateMatricula = req.body;
    try {
      await database.Matriculas.update(newUpdateMatricula, {
        where: { id: Number(matriculaId), estudante_id: Number(estudanteId) },
      });
      const matriculaUpdate = await database.Matriculas.findOne({
        where: { id: Number(matriculaId) },
      });
      return res.status(200).json(matriculaUpdate);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  static async deleteMatricula(req, res) {
    const { estudanteId, matriculaId } = req.params; //Parametro na URL
    try {
      await database.Matriculas.destroy({
        where: { id: Number(matriculaId), estudante_id: Number(estudanteId) },
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
