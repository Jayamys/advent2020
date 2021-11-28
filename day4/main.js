
const getData = require("./script.js");

let data = getData("\n\n");

let reg = /\n/ig;

for (let x = 0; x< data.length; x++) {
    data[x] = data[x].replace(reg, " ").split(" ")
}
console.log(data)


