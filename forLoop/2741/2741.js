const input = require('fs').readFileSync("./input.txt").toString().trim();
const N = parseInt(input);
let output='';

for(i=0;i<N;i++){
  output+=i+1+'\n';
}

console.log(output);