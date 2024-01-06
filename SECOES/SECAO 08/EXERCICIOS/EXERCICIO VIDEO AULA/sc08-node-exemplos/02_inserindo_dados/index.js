const express = require("express");
const exphb = require("express-handlebars");
const mysql = require("mysql");

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.engine("handlebars", exphb.engine());
app.set("view engine", "handlebars");

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("home");
});

app.post("/books/insertbook", (req, res) => {
  const title = req.body.title;
  const pagesqty = req.body.pagesqty;

  const sql_query = `INSERT INTO books (title, pagesqty) VALUES ('${title}', '${pagesqty}')`;

  conn.query(sql_query, function (err) {
    if (err) {
      console.log(err);
    }

    console.log("Insert Book Sucess !!");
    res.redirect("/");
  });
});

const conn = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "zb123456",
  database: "nodemysql",
});

conn.connect(function (err) {
  if (err) {
    console.log(err);
  }
  console.log("Database MySQL Connect !!");

  app.listen(3000);
});
