import express from "express";

const app = express();
app.use(express.json());

//CRUD & Rotas
app.get("/", (req, res) => {
  res.status(200).send("Treinamento Node");
});

export default app;
