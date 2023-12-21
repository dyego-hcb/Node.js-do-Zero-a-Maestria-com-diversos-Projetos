const path = require("path");

const customPath = "/relatorios/dyego/relatorio1.pdf";

console.log('customPath: ' + customPath);
console.log('path.dirname(customPath): ' + path.dirname(customPath));
console.log('path.basename(customPath): ' + path.basename(customPath));
console.log('path.extname(path.basename): ' + path.extname(customPath));