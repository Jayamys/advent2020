const fs = require('fs');

function getData(fileLocation = "./input.txt") {
    try {
        return fs.readFileSync(fileLocation, 'utf8').split("\n")
    } catch (err) {
        console.error(err)
    }
}

const data = getData();

for (let y = 0; y < data.length;y++) {
    data[y] = data[y].split("")
}

// console.log(data)

function slopeCount(dataSet, rowShift, colShift) {
    let row = 0;
    let col = 0;
    let totalCount = 0;
    let height = dataSet.length;
    let width = dataSet[0].length;
    // console.log(width)
    do {
        // console.log(dataSet[row][col])
        if (dataSet[row][col] == "#") {
            totalCount++
            // dataSet[row][col] = "X"
        } else {
            // dataSet[row][col] = "O"
        }
        row += rowShift;
        col+= colShift;
        if (col >= width){
            col = col-width
        }
        
    } while(row <height)
    console.log(totalCount)
    return totalCount
}

let slopeOne = slopeCount([...data], 1,1)
let slopeTwo = slopeCount([...data], 1,3)
let slopeThree = slopeCount([...data], 1,5)
let slopeFour = slopeCount([...data], 1,7)
let slopeFive = slopeCount([...data], 2,1)

console.log(slopeOne * slopeTwo * slopeThree * slopeFour * slopeFive)