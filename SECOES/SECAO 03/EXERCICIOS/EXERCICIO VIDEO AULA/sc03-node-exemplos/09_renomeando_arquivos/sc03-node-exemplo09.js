const fs = require("fs");

const arqAntigo = 'arquivo.txt'
const arqNovo = 'novo_arquivo.txt'

fs.rename(`./file_rename/${arqAntigo}`, `./file_rename/${arqNovo}`, function(err){
  if(err)
  {
    console.log(err);
    return;
  }

  console.log(`Arquivo ${arqAntigo} foi renomeado para ${arqNovo} !!`);
});