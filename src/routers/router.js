const express = require("express");
const { login, creatUser, findUser } = require("../controller/handlerRouter");
const tokenValidator = require("../middleware/validatorToken");
const router = express.Router();

router.post("/user", creatUser);
router.post("/login", login);

router.use(tokenValidator);

router.get("/user", findUser);

module.exports = router;
