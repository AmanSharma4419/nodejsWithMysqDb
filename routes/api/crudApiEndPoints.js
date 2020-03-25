const express = require("express");
const router = express.Router();
const crudController = require("../../controllers/crudControllers");

// Api End-Points

router.get("/entries", crudController.showEntery);

router.post("/entries", crudController.createEntery);

router.put("/update/:id", crudController.updateEntery);

router.delete("/delete", crudController.deleteEntry);

module.exports = router;
