const fs = require('fs');
const input = fs.readFileSync("./input.txt").toString().trim();
const N = parseInt(input);

for(i=1;i<=9;i++){
  console.log(`${N} * ${i} = ${i*N}`)
}