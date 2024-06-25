const joi = require("joi");

const schemaCreate = joi.object({
  nome: joi.string().required().messages({
    "string.empty": "O campo nome é obrigatório!",
    "any.required": "O campo nome é obrigatório!",
  }),
  email: joi.string().email().required().messages({
    "string.empty": "O campo email é obrigatório!",
    "string.email": "Informe um email válido!",
    "any.required": "O campo email é obrigatório!",
  }),
  senha: joi.string().min(5).required().messages({
    "string.empty": "O campo senha é obrigatório!",
    "string.min": "A senha deve conter no mínimo cinco caracteres!",
    "any.riquered": "O campo senha é obrigatório!",
  }),
});

const schemaLogin = joi.object({
  email: joi.string().email().required().messages({
    "string.empty": "O campo email é obrigatório!",
    "string.email": "Informe um email válido!",
    "any.riquered": "O campo email é obrigatório!",
  }),
  senha: joi.string().min(5).required().messages({
    "string.empty": "O campo senha é obrigatório!",
    "string.min": "A senha deve conter no mínimo cinco caracteres!",
    "any.riquired": "O campo senha é obrigatório!",
  }),
});

// const schemaId = joi.object({
//   id: joi.string()
// })

module.exports = {
  schemaCreate,
  schemaLogin,
};
