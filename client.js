const net = require("net");

// establishes a connection with the game server
const connect = function() {
  const conn = net.createConnection({
    host: "10.0.2.15",
    port: 50541
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");
  conn.on("connect", () => {
    conn.write("Successfully connected to game server");
  });
  conn.on("connect", () => {
    conn.write("Name: KB");
  });


  // code that does something when the connection is first established
  conn.on("data", (info) => {
    console.log("Data received!");
    console.log(info);
  });

  //Standard input from Node.js
  //When you type into terminal and hit enter.
  process.stdin.on('data', (userMessage) => {
    conn.write(userMessage);
  });

  return conn;
};



module.exports = {connect};