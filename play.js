const { connect } = require("./client");
const { setupInput } = require("./input");

console.log("Connecting ...");
const clientConnection = connect()
setupInput(clientConnection);









