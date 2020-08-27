/**
 * Setup User Interface 
 * Specifically, so that we can handle user input via stdin
 */

const constants =  require("./constants");
const keyMsg = constants.keyMsg;


let connection;

const setupInput = function(conn) {

  connection = conn;

  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  stdin.on('data', (key)=>{
    handleUserInput(key)
  });
  
  const handleUserInput = (key) => {

    switch(key) {
      case constants.upKey:
        connection.write(keyMsg.up);
        break;
      case constants.downKey:
        connection.write(keyMsg.down);
        break;
      case constants.leftKey:
        connection.write(keyMsg.left);
        break;
      case constants.rightKey:
        connection.write(keyMsg.right);
        break;
      case constants.greet:
        connection.write(keyMsg.greet);
        break;
      case constants.lol:
        connection.write(keyMsg.lol);
        break;
      case constants.bye:
        connection.write(keyMsg.bye);
        break;
      case '\u0003':
        process.exit();
    }
  }

  return stdin;
}


module.exports ={ setupInput };