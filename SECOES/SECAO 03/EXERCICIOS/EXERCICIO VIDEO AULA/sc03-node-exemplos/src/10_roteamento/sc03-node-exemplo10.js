const http = require("http");
const fs = require("fs");
const url = require("url");

const port = 3000;

const server = http.createServer((req, res) => {
  const q = url.parse(req.url, true);
  const fileName = q.pathname.substring(1);

  if (fileName.includes('html')) {
    if(fs.existsSync(`./html_pages/${fileName}`))
    {
      fs.readFile(`./html_pages/${fileName}`, function (err, data) {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.write(data);
        return res.end();
      });
    }
    else
    {
      fs.readFile('./html_pages/404.html', function (err, data) {
        res.writeHead(404, { "Content-Type": "text/html" });
        res.write(data);
        return res.end();
      });
    }
  }
});

server.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
