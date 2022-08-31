const net = require("net");
const { IP, PORT } = require("./constants");

// establishes a connection with the game server
const connect = function() {
  const conn = net.createConnection({
    host: IP,
    port: PORT
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");
  conn.on("connect", () => {
    conn.write("Successfully connected to game server");
  });
  conn.on("connect", () => {
    conn.write("Name: KB");
    conn.write("Say: Here I go!");
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



module.exports = { connect };