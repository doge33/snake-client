const net = require('net');

const connect = function() {
  const conn = net.createConnection({
    host: '10.0.2.15',// ip?? //135.23.222.131 for public
    port: 50541// port? //50542 for public
  });
  //interpret incoming data as text
  conn.setEncoding('utf8');

  conn.on('connect', () => {  //print sth as soon as connection established
    console.log("Yayy! Successfully connected to game server~");
    conn.write("Name: 333");
    conn.write("Move: up");
    
    /*
    let moved=0;
    const move = setInterval(()=> {
      conn.write("Move: up");
      moved++;
      moved === 5 ? clearInterval(move): '';
    }, 200);
    */
    
  conn.on('data', (data) => {
    console.log(data);
  })

  return conn;
})
}

module.exports = {connect};  //if you want it as an object shorthand, export it as object