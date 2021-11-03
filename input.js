const {connect} = require("./client")
// Stores the active TCP connection object.
let connection;
// setup interface to handle user input from stdin

const setupInput = function (conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);
  stdin.on("data", moveUp);
  stdin.on("data", moveLeft);
  stdin.on("data", moveDown);
  stdin.on("data", moveRight);
  return stdin;
};

const handleUserInput = (data) => {
  if (data === '\u0003') {
    process.exit();
  }
};
const moveUp = (data) => {
  if (data === "w") {
    connection.write('Move: up');
  }
};
const moveLeft = (data) => {
  if (data === "a") {
    connection.write('Move: left');
  }
};
const moveDown = (data) => {
  if (data === "s") {
    connection.write("Move: down")
  }
};
const moveRight = (data) => {
  if (data === "d") {
    connection.write("Move: right")
  }
};

module.exports = {setupInput}