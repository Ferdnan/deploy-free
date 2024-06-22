const mongoose = require("mongoose");
require("dotenv").config();

async function connectToDatabase() {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("Conectado ao MongoDB Atlas!");
  } catch (error) {
    console.error("Erro ao conectar ao MongoDB Atlas:", error);
  }
}

module.exports = connectToDatabase;
