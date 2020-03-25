const databaseConnection = require("../database/mysql");
const httpStatusCodes = require("http-status-codes");

// Controller for creation
function createEntery(req, res, next) {
  if (!req.body.name || !req.body.designation) {
    res
      .status(httpStatusCodes.UNAUTHORIZED)
      .json("PLEASE FILL All CREDENTIALS");
  }
  try {
    const recivedData = {
      name: req.body.name,
      designation: req.body.designation
    };
    databaseConnection.query(
      "INSERT INTO enteries SET ?",
      recivedData,
      (err, result) => {
        if (err) return next(err);
        res.status(httpStatusCodes.OK).json({ data: result });
      }
    );
  } catch (err) {
    res.status(httpStatusCodes.UNAUTHORIZED).json(err.message);
  }
}

// Controller for reading data
function showEntery(req, res, next) {
  try {
    const sqlQuery = "SELECT * FROM enteries";
    databaseConnection.query(sqlQuery, function(err, data) {
      if (err) return next(err);
      return res.status(httpStatusCodes.OK).json({ resp: data });
    });
  } catch (err) {
    res.status(httpStatusCodes.UNAUTHORIZED).json(err.message);
  }
}

// Controller for the updating data
function updateEntery(req, res, next) {
  console.log("in the update");
  if (!req.body.name || !req.body.designation) {
    res.status(httpStatusCodes.UNAUTHORIZED).json("PLEASE CHECK CREDENTIALS");
  }
  try {
    const id = req.params.id;
    const updatedData = {
      name: req.body.name,
      designation: req.body.designation
    };
    const sqlQuery = "UPDATE enteries SET ? WHERE id = " + id;
    databaseConnection.query(sqlQuery, updatedData, (err, data) => {
      if (err) return next(err);
      return res.status(httpStatusCodes.OK).json({ resp: data });
    });
  } catch (err) {
    res.status(httpStatusCodes.UNAUTHORIZED).json(err.message);
  }
}

// Controller for the deleting the data
function deleteEntry(req, res, next) {
  try {
    const sqlQuery = "DELETE FROM enteries";
    databaseConnection.query(sqlQuery, (err, data) => {
      if (err) return next(err);
      res
        .status(httpStatusCodes.OK)
        .json({ res: "YOUR TABLE DELETED SUCESFULLY" });
    });
  } catch (err) {
    res.status(httpStatusCodes.UNAUTHORIZED).json(err.message);
  }
}

// Exporting explictly controllers
module.exports = { createEntery, showEntery, updateEntery, deleteEntry };
