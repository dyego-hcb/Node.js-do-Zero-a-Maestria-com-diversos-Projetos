const readline = require("readline").createInterface(
    {
        input: process.stdin,
        output: process.stdout,
    }
)

readline.question('Qual a sua linguagem preferida? ', (language) =>
{
    if(language === 'python')
    {
        console.log('Isso nem e linguagem !');
    }
    else
    {
        console.log(`A minha linguagem preferida e: ${language}`);
    }
    readline.close();
});