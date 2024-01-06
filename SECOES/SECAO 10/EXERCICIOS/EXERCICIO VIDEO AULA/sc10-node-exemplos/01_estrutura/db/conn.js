const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("nodemvc", "root", "root", {
  host: "localhost",
  dialect: "mysql",
});

try {
  sequelize.authenticate();
  console.log("Connectio to MySQL DB sucesses");
} catch (err) {
  console.log(`Connection to MySQL DB falied. \n ${err}`);
}

exports.default = sequelize;
