const databaseConnection = require("../database/mysql");
const httpStatusCodes = require("http-status-codes");

// Controller for creation
function createEntery(req, res, next) {
  if (!req.body) {
    res.status(httpStatusCodes.UNAUTHORIZED).json("PLEASE FILL CREDENTIALS");
  }
  try {
    const recivedData = {
      name: req.body.name,
      designation: req.body.designation
    };
    databaseConnection.query(
      "INSERT INTO  enteries SET ?",
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
    const sqlQuery = "SELECT * FROM  enteries";
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
  try {
    const sqlQuery = "";
    databaseConnection.query(sqlQuery, (err, data) => {
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
    const sqlQuery = "";
    databaseConnection.query(sqlQuery, (err, data));
  } catch (err) {
    res.status(httpStatusCodes.UNAUTHORIZED).json(err.message);
  }
}

// Exporting explictly controllers
module.exports = { createEntery, showEntery, updateEntery };
