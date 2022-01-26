const fs = require('fs');
const input = fs.readFileSync("./input.txt").toString().trim().split(" ");
console.log(parseInt(input[0])+parseInt(input[1]));