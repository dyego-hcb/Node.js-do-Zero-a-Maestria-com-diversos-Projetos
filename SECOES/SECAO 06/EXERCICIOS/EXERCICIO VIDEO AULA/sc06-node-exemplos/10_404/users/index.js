const express = require("express");
const router = express.Router();
const path = require("path");

const basePath = path.join(__dirname, "../templates");

router.get("/add", (req, res) => {
  res.sendFile(`${basePath}/userForm.html`);
});

router.post("/save", (req, res) => {
  console.log(req.body);

  const name = req.body.name;
  const age = req.body.age;

  console.log(`O nome do usuario e ${name}, e ele tem ${age} anos.`);

  res.sendFile(`${basePath}/userForm.html`);
});

router.get("/:id", (req, res) => {
  const id = req.params.id;

  console.log(`Estamos buscando pelo usuario ${id}`);

  res.sendFile(`${basePath}.html`);
});

router.get("/", (req, res) => {

  res.sendFile(`${basePath}/users.html`);
});

module.exports = router;
