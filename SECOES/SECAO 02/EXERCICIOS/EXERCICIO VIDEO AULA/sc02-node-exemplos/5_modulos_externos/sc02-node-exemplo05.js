const minimist = require('minimist');

const args = minimist(process.argv.slice(2));

console.log(args);

const name = args['nome'];
const profissao = args['profissao'];

console.log(name, profissao);

console.log(`O nome é ${name} e sua profissao é ${profissao}`);