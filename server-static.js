const http = require("http");
const port = 3000;

const rotas = { "/": "Home", "/about": "Sobre" };
const servidor = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end(rotas[req.url]);
});

servidor.listen(port, () => {
  console.log(`Servidor excutando na porta ${port}`);
});
