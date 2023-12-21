const fs = require("fs");

fs.stat('./file/novo_arquivo.txt', (err, stats) =>
{
    if(err)
    {
        console.log(err);
        return;
    }

    console.log('stats.isFile(): ' + stats.isFile());
    console.log('stats.isDirectory(): ' + stats.isDirectory());
    console.log('stats.isSymbolicLink(): ' + stats.isSymbolicLink());
    console.log('stats.ctime(): ' + stats.ctime);
    console.log('stats.size(): ' + stats.size);
});