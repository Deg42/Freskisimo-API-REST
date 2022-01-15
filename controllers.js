// IMPORTS
const { Congelado } = require("./models.js");

// CONTROLLER CRUD FUNCTIONS 

// ~ CONGELADOS ~
exports.readCongelados = (req, res) =>
    Congelado.find({}, (err, data) => {
        if (err) res.json({ error: err });
        else     res.json(data);
    });


exports.readCongelado = (req, res) =>
    Congelado.findOne({ _id: req.params.id }, (err, data) => {
        if (err) res.json({ error: err });
        else     res.json(data);
    });


exports.deleteCongelado = (req, res) =>
    Congelado.findOneAndRemove({ _id: req.params.id }, (err, data) => {
        if (err) res.json({ error: err });
        else     res.json(data);
    });


exports.updateCongelado = (req, res) =>
    Congelado.findOneAndUpdate(
        { _id: req.params.id },
        { $set: { 
            nombre: req.body.nombre, 
            precio: req.body.precio, 
            cantidad: req.body.cantidad 
        } }, 
        (err, data) => {
            if (err) res.json({ error: err });
            else     res.json(data);
        }
    );


exports.createCongelado = (req, res) =>
    new Congelado({ 
        nombre: req.body.nombre, 
        precio: req.body.precio, 
        cantidad: req.body.cantidad 
    })
    .save((err, data) => {
        if (err) res.json({ error: err });
        else     res.json(data);
    });
