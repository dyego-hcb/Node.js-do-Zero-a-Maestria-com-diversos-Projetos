const express = require("express");
const exphbs = require("express-handlebars");

const app = express();

const hbs = exphbs.create({partialsDir: ["views/partials"],});

app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");

app.get("/dashboard", (req, res) => {
  const items = ["Item a", "Item b", "Item c"];

  res.render("dashboard", { items });
});

app.get("/post", (req, res) => {
  const post = {
    title: "Aprender Node.js",
    category: "JavaScript",
    body: "Este artigo vai te ajudar a aprender Node.js ....",
    comments: 4,
  }

  res.render("blogpost", { post });
});

app.get("/blog", (req, res) => {
  const posts = [
    {
      title: "Aprender Node.js",
    category: "JavaScript",
    body: "Este artigo vai te ajudar a aprender Node.js ....",
    comments: 4,
    },
    {
      title: "Aprender PHP",
    category: "PHP",
    body: "Este artigo vai te ajudar a aprender PHP ....",
    comments: 4,
    },
    {
      title: "Aprender Python",
    category: "Python",
    body: "Este artigo vai te ajudar a aprender Python ....",
    comments: 4,
    },
  ]

  res.render("blog", {posts});
})

app.get("/", (req, res) => {
  const user = {
    name: "Dyego",
    surname: "Braga",
    age: "23",
  };

  const palavra = "Teste";

  const auth = false;

  const approved = false;

  res.render("home", { user: user, palavra, auth, approved });
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
