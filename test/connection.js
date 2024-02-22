const mysql = require("mysql");

const connection = mysql.createConnection({
  host: "localhost",
  database: "contactproject",
  user: "root",
  password: "060407",
});

connection.connect((err) => {
  if (err) {
    console.error("ERROR!", err);
    return;
  }

  console.log("Connected!");
});

connection.end((err) => {
  if (err) {
    console.error("Error closing MySQL connection:", err);
    return;
  }
  console.log("MySQL connection closed");
});
