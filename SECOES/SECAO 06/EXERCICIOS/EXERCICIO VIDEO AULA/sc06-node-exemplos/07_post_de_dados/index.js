const express = require("express");
const app = express();
const port = 3000;

const path = require("path");

const basePath = path.join(__dirname, "templates");

app.get("/users/add", (req, res) => {
  res.sendFile(`${basePath}/userForm.html`);
});

app.use(
    express.urlencoded({
        extended: true,
    }),
);

app.use(express.json());

app.post("/users/save", (req, res) => {
    console.log(req.body);

    const name = req.body.name;
    const age = req.body.age;

    console.log(`O nome do usuario e ${name}, e ele tem ${age} anos.`);

    res.sendFile(`${basePath}/userForm.html`);
});

app.get("/users/:id", (req, res) => {
  const id = req.params.id;

  console.log(`Estamos buscando pelo usuario ${id}`);

  res.sendFile(`${basePath}/users.html`);
});

app.get("/", (req, res) => {
  res.sendFile(`${basePath}/index.html`);
});

app.listen(port, () => {
  console.log(`Application running on port ${port}`);
});
