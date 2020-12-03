//import exec from "child_process";
const cp = require("child_process");
cp.execFile("./tesis.ps1", [],(error, stdout, stderr) => {
  if (error) {
    console.error(`exec error: ${error}`);
    return;
  }
  console.log(`stdout: ${stdout}`);
  console.error(`stderr: ${stderr}`);
});
