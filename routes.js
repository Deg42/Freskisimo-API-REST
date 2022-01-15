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

// EXPORT ROUTER
module.exports = router;