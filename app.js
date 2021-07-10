const {fruits, money} = require('./fruits');

fruits.forEach((fruit) => {
  console.count(fruit);
});

console.log('actual money', money);

var cowsay = require("cowsay");
console.log(
    cowsay.say({
      text: "I'm a moooodule",
      e: "OwO",
      T: ":P",
    })
);

const http = require("http");

const port = 8000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/html");
  res.end("<h1>Hello, World!</h1>");
});

server.listen(port, () => {
  console.log(`Server running at port ${port}`);
});
