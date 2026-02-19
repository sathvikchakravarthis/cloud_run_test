const http = require("http");
const port = process.env.PORT || 8080;

http.createServer((req, res) => {
  res.end("VS03 clean deploy works 🚀");
}).listen(port);
