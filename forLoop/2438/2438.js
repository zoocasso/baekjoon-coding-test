const input = require('fs').readFileSync("./input.txt").toString().trim();
const N = parseInt(input);
let output = '';

for(i=1;i<=N;i++){
  for(j=1;j<=i;j++){
    output += '*';
  }
  output += '\n';
}

console.log(output);