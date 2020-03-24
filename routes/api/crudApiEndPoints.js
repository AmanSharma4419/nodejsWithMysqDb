const express = require("express");
const router = express.Router();

const crudController = require("../../controllers/crudControllers");

router.get("/entries", crudController.showEntery);

router.post("/entries", crudController.createEntery);

module.exports = router;
