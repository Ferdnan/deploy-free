const express = require("express");
const router = express.Router();
const {
  login,
  creatUser,
  findUser,
  deleteUser,
} = require("../controller/handlerRouter");
const tokenValidator = require("../middleware/validatorToken");
const validatorScheme = require("../middleware/validatorSchemaUser");
const { schemaLogin, schemaCreate } = require("../schema/schemaUser");
const emailValidator = require("../middleware/emailValidator");

router.post("/user", emailValidator, validatorScheme(schemaCreate), creatUser);
router.post("/login", validatorScheme(schemaLogin), login);
router.delete("/user", deleteUser);

router.use(tokenValidator);

router.get("/user", findUser);

module.exports = router;
