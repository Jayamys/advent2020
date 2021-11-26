const fs = require('fs');


function getData(fileLocation = "./input.txt") {
    try {
        return fs.readFileSync(fileLocation, 'utf8')
    } catch (err) {
        console.error(err)
    }
}
let data = getData();

console.log("\n\n");

data = data.split('\n')
for (let x = 0; x < data.length;x++) {
    data[x] = parseInt(data[x])
}


console.log(data)
let a = 0;
let b = 0;
let sum = 0;
for (let i = 0; i < data.length; i++){
    for (let k = i+1; k<data.length;k++) {
        if(data[i] + data[k] == 2020){
            sum = (data[i] * data[k])
            console.log(data[i] + " * " + data[k] + " = " + sum)
        }
    }
}


console.log("\n")