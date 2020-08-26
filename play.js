const net = require('net');
//establishes connection with the game server

const connect = function() {
  const conn = net.createConnection({
    host: '135.23.222.131',// ip??
    port: 50542// port?
  });
  //interpret incoming data as text
  conn.setEncoding('utf8');

  conn.on('data', (data) => {
    console.log(data);
  })

  return conn;
}

console.log('Connecting...');

connect();
