const fs = require("fs");

const arqRemove = 'arquivo.txt'

fs.unlink(`./file_remove/${arqRemove}`, function(err){
  if(err)
  {
    console.log(err);
    return;
  }

  console.log(`Arquivo ${arqRemove} foi removido !!`);
});