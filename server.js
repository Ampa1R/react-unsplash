const http = require("http");
const fs = require('fs');
var port = process.env.PORT || 3000;

const server = http.createServer( (req, res) => {
  let url = '/index.html';
  let contentType = 'text/html';
  if(req.url === '/bundle.js') {
    url = '/bundle.js';
    contentType = 'application/javascript';
  }
  const path = `./build${url}`;
  fs.readFile(path, (err, data) => {
    if(err){
      console.log(err);
      return;
    }
    res.writeHead(200, {'Content-Type': contentType, 'Content-Length': data.length});
    res.write(data);
    res.end();
  });
});
server.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
