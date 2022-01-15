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

// ~ VEHICULOS ~
const Vehiculo = mongoose.model(
  'Vehiculo',
  new mongoose.Schema(
    { matricula: { type: String, unique: true }, marca: String, modelo: String, anyo: Date},
    {
      versionKey: false,  // Ignore version key
    }
  )
)

// ~ REPARTIDORES ~
const Repartido = mongoose.model(
  'Repartidor',
  new mongoose.Schema(
    { dni : { type: String, unique: true }, nombre: String, apellido: String, repartiendo: Boolean, vehiculo: Vehiculo},
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