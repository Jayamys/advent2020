const fs = require('fs');

function getData(fileLocation = "./input.txt") {
    try {
        return fs.readFileSync(fileLocation, 'utf8').split("\n")
    } catch (err) {
        console.error(err)
    }
}

let data = getData();

for (let y = 0; y < data.length;y++) {
    data[y] = data[y].split("")
}

// console.log(data)

let row = 0;
let col = 0;
let totalCount = 0;
let height = data.length;
let width = data[0].length;
console.log(width)
do {
    // console.log(data[row][col])
    if (data[row][col] == "#") {
        totalCount++
        data[row][col] = "X"
    } else {
        data[row][col] = "O"
    }
    row += 1
    col+= 3
    if (col >= width){
        col = col-width
    }
    console.log(col)
} while(row <height)

console.log(totalCount)