const express = require("express");
const exphbs = require("express-handlebars");

const app = express();
const port = 3000;
const hbs = exphbs.create({ partialsDir: ["views/partials"] });

app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");

app.use(express.static("public"));

const products = [
  {
    id: 1,
    title: "Mouse Razer Viper Mini",
    category: "Eletronicos",
    body: "Mouse gamer razer com 10.000 dpi ...",
    price: 199.9,
  },
  {
    id: 2,
    title: "Teclado Razer",
    category: "Eletronicos",
    body: "Teclado mecanico gamer razer ...",
    price: 199.9,
  },
  {
    id: 3,
    title: "Headset Razer 7.1",
    category: "Eletronicos",
    body: "Headset gamer razer ...",
    price: 199.9,
  },
];

app.get("/products", (req, res) => {
  res.render("products", { products });
});

app.get("/product/:id", (req, res) => {
  const product = products[parseInt(req.params.id) - 1];
  res.render("product", { product });
});

app.get("/", (req, res) => {
  const name = "Dyego";
  const auth = true;

  res.render("home", { name, auth, products });
});

app.listen(port, () => {
  console.log(`Application running on port ${port}`);
});
