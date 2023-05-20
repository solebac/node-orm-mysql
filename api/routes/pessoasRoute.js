const { Router } = require("express"); //ferramento do express | Dá acesso ao metodos do express
const PessoaController = require("../controllers/PessoaController");

const router = Router();

router.get("/pessoas", PessoaController.pegaTodasAsPessoas);

router.get("/pessoas/:id", PessoaController.pegaOnePessoa);

router.post("/pessoas", PessoaController.createPessoa);

router.put("/pessoas/:id", PessoaController.updatePessoa);

router.delete("/pessoas/:id", PessoaController.deletePessoa);

module.exports = router; //export para ficar disponivel.
