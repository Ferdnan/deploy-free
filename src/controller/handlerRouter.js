require("dotenv").config();
const { usuario } = require("../models/schemas");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const login = async (req, res) => {
  const { email, senha } = req.body;
  try {
    // find user for email
    const findUser = await usuario.findOne({ email });
    // destruture _doc object
    const { senha: _, _id: off, __v: off1, ...dataUser } = findUser._doc;

    if (!findUser)
      return res.status(404).json({ mensagem: "Usuário não encontrado!" });
    // Validator password user
    const validarSenha = await bcrypt.compare(senha, findUser.senha);

    if (!validarSenha)
      return res.status(401).json({ mensagem: "Senha inválida!" });
    // creat token jwt
    const token = await jwt.sign({ dataUser }, process.env.JWT_SECRET);

    return res.status(200).json({ dataUser, token });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

const creatUser = async (req, res) => {
  const { nome, email, senha } = req.body;

  try {
    const senhaHash = await bcrypt.hash(senha, 10);

    const novoUsuario = await usuario.create({
      nome,
      email,
      senha: senhaHash,
    });
    console.log(novoUsuario);
    if (!novoUsuario) {
      return res.status(400).json({ mensagem: "Usuário informado já existe!" });
    }

    const { _id: off, __v: offs, senha: _, ...dataUser } = novoUsuario._doc;

    res.status(201).json(dataUser);
  } catch (error) {
    if (error.keyValue.email == email) {
      return res.status(400).json({ mensagem: "Email informado já existe!" });
    }
    return res.status(500).json({ error: error.message });
  }
};

const findUser = async (req, res) => {
  const id = req.query;
  const idNumber = Number(id);
  try {
    if (!idNumber || isNaN(idNumber)) {
      return res.status(400).json({ mensagem: "Informe um numero válido!" });
    }
    const findUser = await usuario.findOne(id);

    if (!findUser) {
      return res.status(400).json({ mensagem: "Usuário não encontrado!" });
    }

    const { nome, email } = findUser._doc;

    return res.status(200).json({ nome, email });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

const deleteUser = async (req, res) => {
  const id = Number(req.query.id);
  try {
    if (!id || isNaN(id))
      return res.status(400).json({ mensagem: "Informe um número válido!" });

    const deletingUser = await usuario.findOneAndDelete({ id: id });

    if (!deletingUser)
      return res
        .status(404)
        .json({ mensagem: "Usuário informado não existe!" });

    return res.status(204).send();
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

module.exports = {
  login,
  creatUser,
  findUser,
  deleteUser,
};
