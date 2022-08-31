const net = require("net");

// establishes a connection with the game server
const connect = function() {
  const conn = net.createConnection({
    host: "10.0.2.15",
    port: 50541
  });
  conn.on("data", (data) => {
    console.log(data);
  });
  // conn.on("connect", () => {
  //   conn.write("Hello from Kenia!");
  // });

  //Standard input from Node.js
  //When you type into terminal and hit enter.
  process.stdin.on('data', (userMessage) => {
    conn.write(userMessage);
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  return conn;
};





console.log("Connecting ...");
connect();