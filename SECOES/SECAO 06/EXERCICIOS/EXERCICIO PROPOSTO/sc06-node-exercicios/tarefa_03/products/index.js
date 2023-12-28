const express = require("express");
const router = express.Router();

const path = require("path");

const basePath = path.join(__dirname, "../templates");

router.get("/add", (req, res) => {
  res.sendFile(`${basePath}/productsForm.html`);
});

router.post("/save", (req, res) => {
  console.log(req.body);

  const nameProduct = req.body.nameProduct;
  const valueProduct = parseFloat(req.body.valueProduct);

  console.log(`O nome do produto e ${nameProduct}, e ele vale R$ ${valueProduct} .`);

  res.sendFile(`${basePath}/productsForm.html`);
});

router.get("/:id", (req, res) => {
  const id = req.params.id;

  console.log(`Estamos buscando pelo produto ${id}`);

  res.sendFile(`${basePath}/products.html`);
});

router.get("/", (req, res) => {

  res.sendFile(`${basePath}/products.html`);
});

module.exports = router;
