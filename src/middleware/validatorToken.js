require("dotenv").config();
const jwt = require("jsonwebtoken");

const tokenValidator = async (req, res, next) => {
  const autHeader = req.headers.authorization;
  const token = autHeader.split(" ");

  if (!token) {
    return res.status(4001)
  }

  const tokenVerify = jwt.verify(token[1], process.env.JWT_SECRET);

  next();
};

module.exports = tokenValidator;
