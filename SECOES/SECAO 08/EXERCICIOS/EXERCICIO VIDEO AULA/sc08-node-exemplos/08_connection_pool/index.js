const express = require("express");
const exphb = require("express-handlebars");
const pool = require("./db/conn");

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

  pool.query(sql_query, function (err) {
    if (err) {
      console.log(err);
    }

    res.redirect("/books");
  });
});

app.get("/books", (req, res) => {
  const sql_query = "SELECT * FROM books";

  pool.query(sql_query, function (err, data) {
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

  pool.query(sql_query, function (err, data) {
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

  pool.query(sql_query, function (err, data) {
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

  pool.query(sql_query, function(err){
    if(err)
    {
      console.log(err);
    }

    res.redirect('/books');
  });
});

app.post('/books/remove/:idbooks', (req, res) =>
{
  const idbooks = req.params.idbooks;

  const sql_query = `DELETE FROM books WHERE idbooks = ${idbooks}`;

  pool.query(sql_query, function(err){
    if(err)
    {
      console.log(err);
      return
    }

    res.redirect('/books');
  });
});

app.listen(3000);