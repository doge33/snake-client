const net = require('net');
const constants  = require("./constants");

const connect = function() {
  const conn = net.createConnection({
    host: constants.IP,// ip?? //135.23.222.131 for public
    port: constants.PORT// port? //50542 for public
  });
  //interpret incoming data as text
  conn.setEncoding('utf8');

  conn.on('connect', () => {  //print sth as soon as connection established
    console.log("Yayy! Successfully connected to game server~");
    conn.write(`Name: ${constants.NAME}`);
  })
  conn.on('data', (data) => {
    console.log(data);
  })

  return conn;
//})
}
/*
    let moved=0;
    const move = setInterval(()=> {
      conn.write("Move: up");
      moved++;
      moved === 5 ? clearInterval(move): '';
    }, 200);
    */

module.exports = {connect};  //if you want it as an object shorthand, export it as object