const express = require("express");
const app = express();
const router = require("./routers/router");
require("dotenv").config();
const connectionMongooseDb = require("./config/database");
// Conexao com banco MONGODB
connectionMongooseDb();
// Especificando tipo JSON
app.use(express.json());
// Chamando as rotas
app.use(router);
// Criando Server
app.listen(process.env.PORT, () => {
  console.log(`SERVER IS RUNING IN PORT: ${process.env.PORT}`);
});
