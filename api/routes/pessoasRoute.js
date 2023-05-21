const { Router } = require("express"); //ferramento do express | Dá acesso ao metodos do express
const PessoaController = require("../controllers/PessoaController");

const router = Router();

router.get("/pessoas", PessoaController.pegaTodasAsPessoas);

router.get("/pessoas/:id", PessoaController.pegaOnePessoa);
router.get(
  "/pessoas/:estudanteId/matriculas/:matriculaId",
  PessoaController.pegaOneMatricula
);

router.post("/pessoas", PessoaController.createPessoa);
router.post(
  "/pessoas/:estudante_id/matriculas",
  PessoaController.createMatricula
);

router.put("/pessoas/:id", PessoaController.updatePessoa);
router.put(
  "/pessoas/:estudanteId/matriculas/:matriculaId",
  PessoaController.updateMatricula
);

router.delete("/pessoas/:id", PessoaController.deletePessoa);
router.delete(
  "/pessoas/:estudanteId/matriculas/:matriculaId",
  PessoaController.deleteMatricula
);

module.exports = router; //export para ficar disponivel.
