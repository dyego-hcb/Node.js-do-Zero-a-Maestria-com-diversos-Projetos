const url = require("url");

const addres = 'https://www.meusite.com.br/catalog?products=cadeira'
const parsedUrl = new url.URL(addres);

console.log('parsedUrl.host: ' + parsedUrl.host);
console.log('parsedUrl.pathname: ' + parsedUrl.pathname);
console.log('parsedUrl.search: ' + parsedUrl.search);
console.log('parsedUrl.searchParams: ' + parsedUrl.searchParams);
console.log('parsedUrl.searchParams.get(products): ' + parsedUrl.searchParams.get('products'));