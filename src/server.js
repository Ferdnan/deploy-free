const express = require("express");
const app = express();
const router = require("./router");
require("dotenv").config();

app.use(express.json());
app.use(router);

app.listen(process.env.PORT, () => {
  console.log(`SERVER IS RUNING IN PORT: ${process.env.PORT}`);
});
