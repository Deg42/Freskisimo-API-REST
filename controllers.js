// IMPORTS
const { Congelado, Vehiculo } = require("./models.js");

// CONTROLLER CRUD FUNCTIONS

// ~ CONGELADOS ~
exports.readCongelados = (req, res) =>
  Congelado.find({}, (err, data) => {
    if (err) res.json({ error: err });
    else res.json(data);
  });

exports.readCongelado = (req, res) =>
  Congelado.findOne({ _id: req.params.id }, (err, data) => {
    if (err) res.json({ error: err });
    else res.json(data);
  });

exports.deleteCongelado = (req, res) =>
  Congelado.findOneAndRemove({ _id: req.params.id }, (err, data) => {
    if (err) res.json({ error: err });
    else res.json(data);
  });

exports.updateCongelado = (req, res) =>
  Congelado.findOneAndUpdate(
    { _id: req.params.id },
    {
      $set: {
        nombre: req.body.nombre,
        precio: req.body.precio,
        cantidad: req.body.cantidad,
      },
    },
    (err, data) => {
      if (err) res.json({ error: err });
      else res.json(data);
    }
  );

exports.createCongelado = (req, res) =>
  new Congelado({
    nombre: req.body.nombre,
    precio: req.body.precio,
    cantidad: req.body.cantidad,
  }).save((err, data) => {
    if (err) res.json({ error: err });
    else res.json(data);
  });

// ~ VEHICULOS ~
exports.readVehiculos = (req, res) =>
  Vehiculo.find({}, (err, data) => {
    if (err) res.json({ error: err });
    else res.json(data);
  });

exports.readVehiculo = (req, res) =>
  Vehiculo.findOne({ _id: req.params.id }, (err, data) => {
    if (err) res.json({ error: err });
    else res.json(data);
  });

exports.deleteVehiculo = (req, res) =>
  Vehiculo.findOneAndRemove({ _id: req.params.id }, (err, data) => {
    if (err) res.json({ error: err });
    else res.json(data);
  });

exports.updateVehiculo = (req, res) =>
  Vehiculo.findOneAndUpdate(
    { _id: req.params.id },
    {
      $set: {
        matricula: req.body.matricula,
        marca: req.body.marca,
        modelo: req.body.modelo,
        fechaMatriculacion: req.body.fechaMatriculacion,
      },
    },
    (err, data) => {
      if (err) res.json({ error: err });
      else res.json(data);
    }
  );

exports.createVehiculo = (req, res) =>
  new Vehiculo({
    matricula: req.body.matricula,
    marca: req.body.marca,
    modelo: req.body.modelo,
    fechaMatriculacion: Date.parse(req.body.fechaMatriculacion),
  }).save((err, data) => {
    if (err) res.json({ error: err });
    else res.json(data);
  });
