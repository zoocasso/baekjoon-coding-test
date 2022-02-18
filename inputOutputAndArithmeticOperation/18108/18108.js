const fs = require('fs');
const input = fs.readFileSync("./input.txt").toString().trim();
const year = parseInt(input);
console.log(year-543);