const mongoose = require("mongoose");
const autoIncremento = require("mongoose-sequence")(mongoose);

const usuarioSchema = new mongoose.Schema({
  nome: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  senha: { type: String, required: true },
});

usuarioSchema.plugin(autoIncremento, { inc_field: "id" });
const usuario = mongoose.model("usuario", usuarioSchema);

module.exports = {
  usuario,
};
