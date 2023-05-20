const http = require("http");
const port = 3000;

const servidor = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end("Servidor Node.");
});

servidor.listen(port, () => {
  console.log(`Servidor excutando na porta ${port}`);
});
console.log(port);
