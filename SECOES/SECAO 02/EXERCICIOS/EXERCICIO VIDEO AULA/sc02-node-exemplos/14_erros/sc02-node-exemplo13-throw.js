const x = "10";

// CHECK IF X IS NUMBER
if(!Number.isInteger(x))
{
    throw new Error('O valor de x nao e um numero inteiro !');
}

console.log('Continuando o codigo ...');