const path = require("path")

// PATH ABSOLUTE
console.log("path.resolve('teste.txt'): " + path.resolve('./file/teste.txt'));

// FOMAR PATH
const midFolder = "relatorios"
const fileName = "dyego.txt"

const finalPath = path.join("/", 'file', midFolder, fileName);

console.log('path.join("/", "file", midFolder, fileName): ' + finalPath);