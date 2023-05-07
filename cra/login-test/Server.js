const fs = require("fs");
const mysql = require("mysql");

const data = fs.readFileSync("./RDS.json");
const rds = JSON.parse(data);

const connection = mysql.createConnection({
  host: rds.host,
  user: rds.user,
  password: rds.password,
  port: rds.port,
  database: rds.database,
});

connection.connect(function (err) {
  if (err) {
    throw err;
  } else {
    connection.query("SELECT * FROM fruit", function (err, rows, fields) {
      console.log(rows);
    });
  }
});
