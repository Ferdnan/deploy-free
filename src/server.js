const express = require("express");
const app = express();
require("dotenv").config();

app.use(express.json());

app.get("/", async (req, res) => {
  res.status(200).json({ mensagem: "deu tudo certo" });
});

app.listen(process.env.PORT, () => {
  console.log(`SERVER IS RUNING IN PORT: ${process.env.PORT}`);
});
