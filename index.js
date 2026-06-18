const http = require("http");
const fs = require("fs");
const path = require("path");

const PORT = 8080;

const server = http.createServer((req, res) => {
  // Determine the file path based on the URL
  let filePath = ".";

  if (req.url === "/") {
    filePath = "./index.html";
  } else if (req.url === "/about") {
    filePath = "./about.html";
  } else if (req.url === "/contact-me") {
    filePath = "./contact-me.html";
  } else {
    filePath = "./404.html";
  }

  // Read and serve the file
  fs.readFile(filePath, (err, content) => {
    if (err) {
      // Backup internal server error if even 404.html is missing
      res.writeHead(500, { "Content-Type": "text/plain" });
      res.end("500 Internal Server Error");
    } else {
      // If its the 404 page, send a 404 status code, otherwise 200
      const statusCode = filePath === "./404.html" ? 404 : 200;
      res.writeHead(statusCode, { "Content-Type": "text/html" });
      res.end(content, "utf-8");
    }
  });
});

server.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
