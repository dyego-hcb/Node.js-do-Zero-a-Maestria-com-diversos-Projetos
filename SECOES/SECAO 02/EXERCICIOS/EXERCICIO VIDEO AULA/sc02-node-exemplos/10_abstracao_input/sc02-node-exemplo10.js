const inquirer = require("inquirer");

inquirer
  .prompt([
    { name: "p1", message: "Qual a nota da primeira prova ? " },
    { name: "p2", message: "Qual a nota da segunda prova? " },
  ])
  .then((answers) => {
    console.log(answers);
    const media = (parseInt(answers.p1) + parseInt(answers.p2)) / 2;

    console.log(`A media é ${media}`);
  })
  .catch((err) => {
    console.log(err);
  });
