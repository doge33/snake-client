const net = require('net');

const connect = function() {
  const conn = net.createConnection({
    host: '135.23.222.131',// ip??
    port: 50542// port?
  });
  //interpret incoming data as text
  conn.setEncoding('utf8');

  conn.on('connect', () => {  //print sth as soon as connection established
    console.log("Yayy! Successfully connected to game server~");
    conn.write("Name: DDD");

  });

  conn.on('data', (data) => {
    console.log(data);
  })

  return conn;
}

module.exports = {connect};  //if you want it as an object shorthand, export it as object