const express = require("express");
const app = express();
const indexRoutes = require("./routes/index.route");

const mysql = require("mysql2/promise");
const pool = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "",
  database: "movie",
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

(async function () {
  try {
    const conn = await pool.getConnection();
    console.log("connected as id " + conn.threadId);

    const [rows, fields] = await conn.execute("SELECT * FROM movie_table");
    console.log("The Movie is: ", rows);

    conn.release();
  } catch (err) {
    console.error("Error connecting to database: ", err);
  }
})();

app.use("/", indexRoutes);

app.listen(3000);
