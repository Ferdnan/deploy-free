const { usuario } = require("../models/schemas");
const bcrypt = require("bcrypt");

const cadastrarUsuario = async (req, res) => {
  const { nome, email, senha } = req.body;

  try {
    if (!nome || !email || !senha) {
      return res.status(400).json({ mensagem: "Preencha todos os dados" });
    }

    const senhaHash = await bcrypt.hash(senha, 10);

    const novoUsuario = await usuario.create({
      nome,
      email,
      senha: senhaHash,
    });

    res.status(201).json(novoUsuario);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

const consultarUsuario = async (req, res) => {
  const { email } = req.body;
  const resultado = await usuario.findOne({ email });

  if (!resultado) {
    return res.status(400).json({ mensagem: "Usuário não encontrado!" });
  }
  res.status(200).json(resultado);
};

module.exports = {
  cadastrarUsuario,
  consultarUsuario,
};
