const express = require("express");
const {
  cadastrarUsuario,
  consultarUsuario,
} = require("../controller/handlerRouter");
const router = express.Router();

router.post("/", cadastrarUsuario);
router.get("/", consultarUsuario);

module.exports = router;
