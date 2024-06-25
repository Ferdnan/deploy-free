require("dotenv").config();
const jwt = require("jsonwebtoken");

const tokenValidator = async (req, res, next) => {
  try {
    const autHeader = req.headers.authorization;
    const token = autHeader.split(" ");

    if (!token) {
      return res.status(4001);
    }

    const tokenVerify = jwt.verify(token[1], process.env.JWT_SECRET);
    req.usuario = tokenVerify;
    next();
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

module.exports = tokenValidator;
