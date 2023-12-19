const inquirer = require("inquirer");
const chalk = require("chalk");

inquirer
  .prompt([
    { name: "nome", message: "Qual seu nome? " },
    { name: "idade", message: "Qual sua idade? " },
  ])
  .then((answers) => {
    if (!answers.nome || !answers.idade) {
      throw new Error("O nome e a idade sao obrigatorios !!");
    }

    const response = `O nome do usuario é ${answers.nome} e ele tem ${answers.idade} anos.`;
    console.log(chalk.bgYellow.black(response));
  })
  .catch((err) => {
    console.log(err);
  });
