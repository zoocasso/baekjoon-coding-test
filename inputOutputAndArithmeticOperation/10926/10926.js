const fs = require('fs');
const nickname = fs.readFileSync("./input.txt").toString().trim();
console.log(`${nickname}??!`);