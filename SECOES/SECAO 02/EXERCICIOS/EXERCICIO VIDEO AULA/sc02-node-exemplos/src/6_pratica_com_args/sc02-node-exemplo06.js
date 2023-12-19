// MODULE EXTERNO
const minimist = require('minimist');

// MODULE INTERNO
const sum = require('./modules/sum').sum;

const args = minimist(process.argv.slice(2));

const num1 = parseInt(args['num1']);
const num2 = parseInt(args['num2']);

sum(num1, num2);
