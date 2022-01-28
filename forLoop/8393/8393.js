const fs = require('fs');
const input = fs.readFileSync("./input.txt").toString().trim();
let steam = 0;
for(i=1;i<=input;i++){
  steam = steam + i;
}
console.log(steam);