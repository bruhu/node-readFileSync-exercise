//load the fs module to our application
const fs = require("fs");

//use the readFileSync function and pass it the relative file path to the file that we want to read
let rawdata = fs.readFileSync("./package.json");

//json parse to avoid reading raw hex data
let { name, version } = JSON.parse(rawdata);

console.log(name, version);
