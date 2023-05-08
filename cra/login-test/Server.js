const fs = require("fs");
const express = require("express");
const mysql = require("mysql");
const dotenv = require("dotenv");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const jwt = require("jsonwebtoken");
const port = process.env.PORT || 8000;

dotenv.config();
const data = fs.readFileSync("./RDS.json");
const rds = JSON.parse(data);
const app = express();
app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    origin: "http://localhost:3000",
    methods: ["GET", "POST"],
    credentials: true,
  })
);

const connection = mysql.createConnection({
  host: rds.host,
  user: rds.user,
  password: rds.password,
  port: rds.port,
  database: rds.database,
});

connection.connect();

app.use("/api/login", (req, res) => {
  const data = req.body;

  try {
    const decode_token = jwt.decode(data.data.credential);
    console.log(decode_token);
  } catch (e) {
    console.log(e);
  }
});

app.listen(port, () => console.log(`Listening on port ${port}`));
