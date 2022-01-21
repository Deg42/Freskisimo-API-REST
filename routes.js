// IMPORTS
const cors       = require('cors')
const express    = require("express");
const controller = require("./controllers.js");

// ROUTER
const router = express.Router();


// API REST CRUD END-POINTS

// ~ CONGELADOS ~
router.get    ("/congelados",      cors(), controller.readCongelados);   // Read All
router.get    ("/congelados/:id",  cors(), controller.readCongelado);    // Read
router.delete ("/congelados/:id",  cors(), controller.deleteCongelado);  // Delete
router.put    ("/congelados/:id",  cors(), controller.updateCongelado);  // Update
router.post   ("/congelados",      cors(), controller.createCongelado);  // Create

// ~ VEHICULOS ~
router.get    ("/vehiculos",      cors(), controller.readVehiculos);   // Read All
router.get    ("/vehiculos/:id",  cors(), controller.readVehiculo);    // Read
router.delete ("/vehiculos/:id",  cors(), controller.deleteVehiculo);  // Delete
router.put    ("/vehiculos/:id",  cors(), controller.updateVehiculo);  // Update
router.post   ("/vehiculos",      cors(), controller.createVehiculo);  // Create

// ~ REPARTIDORES ~
router.get    ("/repartidores",      cors(), controller.readRepartidores);   // Read All
router.get    ("/repartidores/:id",  cors(), controller.readRepartidor);    // Read
router.delete ("/repartidores/:id",  cors(), controller.deleteRepartidor);  // Delete
router.put    ("/repartidores/:id",  cors(), controller.updateRepartidor);  // Update
router.post   ("/repartidores",      cors(), controller.createRepartidor);  // Create

// EXPORT ROUTER
module.exports = router;