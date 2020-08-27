/**
 * Setup User Interface 
 * Specifically, so that we can handle user input via stdin
 */

const {upKey,downKey,leftKey,rightKey, greet,bye,lol,keyMsg} = require("./constants");


let connection;

const setupInput = function(conn) {

  connection = conn;

  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  
  const handleUserInput = (key) => {
    if (key === '\u0003'){
      process.exit()
    }
    if (key === upKey) {

      connection.write(keyMsg.up);
    }
    if (key === leftKey) {

      connection.write(keyMsg.left);
    }
    if (key === downKey) {

      connection.write(keyMsg.down);
    }
    if (key === rightKey) {

      connection.write(keyMsg.right);
    }

    if (key === greet) {

      connection.write(keyMsg.greet);
    }

    if (key == bye) {

      connection.write(keyMsg.bye);
    }

    if (key === lol) {

      connection.write(keyMsg.lol);
    }
  }

  
  stdin.on('data', (key)=>{
    handleUserInput(key)
  });

  return stdin;
}


module.exports ={ setupInput };