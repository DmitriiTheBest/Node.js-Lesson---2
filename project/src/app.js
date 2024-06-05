const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/users") {
    res.status = 200;
    res.statusMessage = "OK";
    res.headers = "Content-Type: application/json";
    res.write("{}");
    res.end();

    return;
  }

  res.status = 200;
  res.statusMessage = "OK";
  res.headers = "Content-Type: text/plain";
  res.write("Hello, world!");
  res.end();
});

server.listen(3003, () => {
  console.log("Server is running on address http://127.0.0.1:3003");
})