const net = require("net");
const { IP, PORT } = require("./constants");

// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: IP, // IP address here,
    port: PORT // PORT number here,
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  conn.on('connect', () => {
    console.log("Connected to the game server!");
    conn.write('Name: chu')
    // conn.write('Move: up')
    // setInterval(function(){conn.write('Move: left')}, 100)
  });

  return conn;
};


module.exports = {
 connect
}