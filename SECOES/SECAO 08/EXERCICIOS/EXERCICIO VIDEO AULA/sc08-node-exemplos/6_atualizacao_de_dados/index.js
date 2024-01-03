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

    res.redirect("/books");
  });
});

app.get("/books", (req, res) => {
  const sql_query = "SELECT * FROM books";

  conn.query(sql_query, function (err, data) {
    if (err) {
      console.log(err);
      return;
    }

    const books = data;

    console.log(books);

    res.render("books", { books });
  });
});

app.get("/books/:idbooks", (req, res) => {
  const idbooks = req.params.idbooks;

  const sql_query = `SELECT * FROM books WHERE idbooks = ${idbooks}`;

  conn.query(sql_query, function (err, data) {
    if (err) {
      console.log(err);
    }

    const book = data[0];

    res.render("book", { book });
  });
});

app.get("/books/edit/:idbooks", (req, res) => {
  const idbooks = req.params.idbooks;

  const sql_query = `SELECT * FROM books WHERE idbooks = ${idbooks}`;

  conn.query(sql_query, function (err, data) {
    if (err) {
      console.log(err);
    }

    const book = data[0];

    res.render("editbook", { book });
  });
});

app.post("/books/updatebook", (req, res) => {
  const idbooks = req.body.idbooks;
  const title = req.body.title;
  const pagesqty = req.body.pagesqty;

  const sql_query = `UPDATE books SET title = '${title}', pagesqty = '${pagesqty}' WHERE idbooks = ${idbooks}`

  conn.query(sql_query, function(err){
    if(err)
    {
      console.log(err);
    }

    res.redirect('/books');
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
