// IMPORTS
const mongoose = require('mongoose');

// SCHEMA MODELS

// ~ CONGELADOS ~
const Congelado = mongoose.model(
  'Congelado',
  new mongoose.Schema(
    { nombre: String, precio: Number, cantidad: Number },
    {
      versionKey: false,  // Ignore version key
    }
  )
)

// EXPORTS
module.exports = {
  Congelado: Congelado
}

// Shorter way to export:
// module.exports = {
//     Congelado
// }