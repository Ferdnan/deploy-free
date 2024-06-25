const { usuario } = require("../models/schemas");

const emailValidator = async (req, res, next) => {
  const { email } = req.body;

  const dataUser = await usuario.findOne({ email });

  if (dataUser) {
    return res.status(400).json({ mensagem: "Email informado já existe!" });
  }

  next();
};

module.exports = emailValidator;
