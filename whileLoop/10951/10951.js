const input = require('fs').readFileSync("./input.txt").toString().trim().split('\n');

let i = 0;

while(i<input.length){
  let A = parseInt(input[i].split(' ')[0]);
  let B = parseInt(input[i].split(' ')[1]);
  console.log(A+B);
  i++;
}