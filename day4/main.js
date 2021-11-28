
const getData = require("./script.js");

let data = getData("\n\n");

let reg = /\n/ig;

for (let x = 0; x< data.length; x++) {
    data[x] = data[x].replace(reg, " ").split(" ")
    let newEntry = {};
    for (let y = 0; y < data[x].length;y++){
        let line = data[x][y].split(":");
        newEntry[line[0]] = line[1]
    }
    newEntry['keys'] = Object.keys(newEntry);
    data[x] = newEntry;
}
// console.log(data)
// let finalCount = 0
// for (let x = 0; x<data.length;x++) {
//     if (data[x].keys.length == 8) {
//         finalCount++
//     } else if (data[x].keys.length == 7 && !data[x].keys.includes("cid")) {
//         finalCount++
//         // console.log("We have: " + data[x].keys + " " + data[x].keys.includes("cid") )
//     } 
// }

const hexcheck = [
    '0','1','2','3','4','5','6','7','8','9','a','b','c','d','e','f'
]
const eyecheck = [
    'amb', 'blu', 'brn', 'gry', 'grn', 'hzl', 'oth'
]

data = data.filter((a) => {
    if (a.keys.length == 8) {
        return true
    } else if (a.keys.length == 7 && !a.keys.includes("cid")) {
        return true
    }
})
data = data.filter((a) => {
    if (a.byr.length == 4 && parseInt(a.byr) >= 1920 && parseInt(a.byr) <= 2002){
        
        if (a.iyr.length == 4 && parseInt(a.iyr) >= 2010 && parseInt(a.iyr) <= 2020) {

            if (a.eyr.length == 4 && parseInt(a.eyr) >= 2020 && parseInt(a.eyr) <= 2030) {

                if ((a.hgt.length >3 )){
                    let hl = a.hgt.length;
                    let flag = false;
                    if (a.hgt.split(""[hl-1] == 'm' && parseInt(a.hgt) >= 150 && parseInt(a.hgt) <= 193)) {
                        flag = true;
                    } else if (a.hgt.split(""[hl-1] == 'n' && parseInt(a.hgt) >= 59 && parseInt(a.hgt) <= 76)){
                        flag = true
                    }

                    if (flag) {

                        let harray = a.hcl.split("");
                        let starter = harray.shift();
                        if (starter == "#" && harray.length == 6) {
                            let hf = true;
                            for (let x = 0; x < 6;x++){
                                if(!hexcheck.includes(harray[x])){
                                    hf = false
                                }
                            }

                            if(hf) {

                                if(eyecheck.includes(a.ecl)) {
                                    // console.log(parseInt(a.pid).toString().length)
                                    if (parseInt(a.pid).toString().length == 9) {
                                        return true
                                    }


                                }


                            }


                        }

                    }

                }

            }

        }

    }
})
console.log(data)
console.log(data.length)
// console.log(data[0].hgt.split("") + " " + parseInt(data[0].hgt))

