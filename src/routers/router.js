const express = require("express");
const router = express.Router();
const { login, creatUser, findUser } = require("../controller/handlerRouter");
const tokenValidator = require("../middleware/validatorToken");
const validatorScheme = require("../middleware/validatorSchemaUser");
const { schemaLogin, schemaCreate } = require("../schema/schemaUser");

router.post("/user", validatorScheme(schemaCreate), creatUser);
router.post("/login", validatorScheme(schemaLogin), login);

router.use(tokenValidator);

router.get("/user", findUser);

module.exports = router;
