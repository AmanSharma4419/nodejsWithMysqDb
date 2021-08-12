const mysql = require("mysql");

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password",
  //sssport: "3306",
  db: "Aman"
});
connection.connect(function(err) {
  try {
    if (err) throw err;
    console.log("Connected To Mysql Db SucessFully!");
  } catch (err) {
    console.log(err.message);
  }
});

// $query = "SELECT * from enteries";

// connection.query($query, function(err, rows, fields) {
//   if (err) {
//     console.log("An error ocurred performing the query.");
//     return;
//   }

//   console.log("Query succesfully executed: ", rows);
// });

module.exports = connection;
