/**
 * Setup User Interface 
 * Specifically, so that we can handle user input via stdin
 */

const {keyMsg } =  require("./constants");


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

    for (let keyName in keyMsg) {
      if(key === keyMsg.exit) {
        process.exit();
      }
      if (key === keyName) {
        connection.write(keyMsg[keyName]);
      }
    }
   
  }

  return stdin;
}


module.exports ={ setupInput };