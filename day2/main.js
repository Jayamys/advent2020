const fs = require('fs');

function getData(fileLocation = "./input.txt") {
    try {
        return fs.readFileSync(fileLocation, 'utf8')
    } catch (err) {
        console.error(err)
    }
}
let data = getData();
data = data.split('\n')

for (let x = 0; x<data.length; x++) {
    let temp = data[x].split(' ')
    if (temp[1] === undefined){
        console.log("found one @ " + x)
        
        continue
    }
    data[(x)] = {
        low : parseInt(temp[0].split("-")[0]),
        high : parseInt(temp[0].split("-")[1]),
        letter : temp[1].split("")[0],
        password : temp[2].split("")
    };
};
// data.pop()
// console.log(data[data.length-1])

function getCount(array, item) {
    return array.filter(x => x == item).length
}

let finalTotal = 0

for (let x = 0; x<data.length; x++) {
    let total = getCount(data[x].password, data[x].letter);
    if (total >= data[x].low && total <= data[x].high) {
        // console.log(data[x].high + " >= " + total + " >= " + data[x].low )
        finalTotal++
    } else {
        console.log("FAIL: " +data[x].high + " >= " + total + " >= " + data[x].low )
    }
}
console.log(finalTotal)

