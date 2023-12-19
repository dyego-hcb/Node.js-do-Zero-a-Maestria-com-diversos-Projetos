const fs = require('fs');

console.log('inicio');

fs.writeFile('./output/out-async.txt', 'hi', function (err) {
    setTimeout(function () 
    {
        console.log('Arquivo Criado !');
    }, 1000);
});

console.log('fim');