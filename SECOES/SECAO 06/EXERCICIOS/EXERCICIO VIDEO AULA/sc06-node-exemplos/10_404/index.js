const express = require("express");
const app = express();
const port = 3000;

const path = require("path");
const usersRoute = require("./users");

app.use(
  express.urlencoded({
    extended: true,
  })
);

app.use(express.json());

app.use(express.static("public"));

const basePath = path.join(__dirname, "templates");

app.use("/users", usersRoute);

app.get("/", (req, res) => {
  res.sendFile(`${basePath}/index.html`);
});

app.use(function (req, res, next) {
  res.status(404).sendFile(`${basePath}/404.html`);
});

app.listen(port, () => {
  console.log(`Application running on port ${port}`);
});
