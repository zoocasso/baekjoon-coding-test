const input = require('fs').readFileSync("./input.txt").toString().trim().split('\n');
const T = parseInt(input);
let output='';

for(i=1;i<=T;i++){
  const num = input[i].split(' ');
  const sum = parseInt(num[0])+parseInt(num[1]);
  output += `Case #${i}: ${sum}` + '\n';
}

console.log(output);