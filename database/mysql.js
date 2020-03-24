const mysql = require("mysql");

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password",
  db: "crud"
});
connection.connect(function(err) {
  try {
    if (err) throw err;
    console.log("Connected To Mysql Db SucessFully");
  } catch (err) {
    console.log(err.stack);
  }
});

module.exports = connection;
