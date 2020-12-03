//import exec from "child_process";
const cp = require("child_process");
const callSerialPort = () => {
  return new Promise((resolve, reject) => {
    console.log("start")
    let result = ""
    let child = cp.spawn("powershell.exe",["./tesis.ps1"]);
    child.stdout.on("data",function(data) {
      result += data
      console.log("-> " + data);
    });
    child.stderr.on("data",function(data){
      result += data
      console.log("-> " + data);
    });
    child.on("exit",function(){
      resolve(result)
      console.log("Powershell Script finished");
    });
    child.stdin.end(); //end input
  })
}
module.exports = callSerialPort
