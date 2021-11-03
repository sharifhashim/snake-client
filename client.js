const net = require("net");
// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: "165.227.47.243",
    port: 50541
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");
  conn.on("data", (data) => {
    console.log(`${data}`)
  });
  conn.on("connect", () => {
    console.log("Successfully connected to the game server")
  });
  conn.on("connect", () => {
    conn.write("Name: HAS")
  })
  // conn.on("connect", () => {
  //   conn.write("Move: up"), setTimeout(() => {
  //     conn.write("Move: left"), 50}), setTimeout(() => {
  //       conn.write("Move: up"), 100
  //     }), setTimeout(() => {
  //       conn.write("Move: left"), 150
  //     })
  //   setInterval(() => {
  //     conn.write("Move: up")
  //   }, 100)
  // });
  return conn;
}
module.exports = { connect };