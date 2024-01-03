const express = require("express");
const exphb = require("express-handlebars");
const conn = require("./db/conn");

const User = require("./models/User");

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.engine("handlebars", exphb.engine());
app.set("view engine", "handlebars");

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("home");
});

conn.sync().then(() => {
  app.listen(3000);
}).catch((err) => { console.log(err)});
