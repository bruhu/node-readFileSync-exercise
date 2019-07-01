const fs = require("fs");

let rawdata = fs.readFileSync("./package.json");
let displayedInfo = JSON.parse(rawdata);

console.log(displayedInfo);
