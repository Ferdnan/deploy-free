require("dotenv").config();

const express = require("express");
const app = express();

const apiRouter = require("./routers/router");
const connectionMongooseDb = require("./config/database");

connectionMongooseDb();
app.use(express.json());
app.use(apiRouter);

app.listen(process.env.PORT, () => {
  console.log(`SERVER IS RUNING IN PORT: ${process.env.PORT}`);
});
