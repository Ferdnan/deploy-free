const mongoose = require("mongoose");
// Schema para criação de tabela
const usuarioSchema = new mongoose.Schema({
  nome: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  senha: { type: String, required: true },
});
// Model para criar a tabela
const usuario = mongoose.model("usuario", usuarioSchema);
// exportando model
module.exports = {
  usuario,
};
