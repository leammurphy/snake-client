const {connect} = require("./client.js")
const {setupInput} = require("./input.js")

// connect();
setupInput(connect());

console.log("Connecting...")


// const readline = require('readline');
// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// })