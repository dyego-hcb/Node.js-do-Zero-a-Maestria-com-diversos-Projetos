const fs = require('fs');

console.log('inicio');

fs.writeFileSync('./output/out-sync.txt', 'hi');

console.log('fim');