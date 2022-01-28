const input = require('fs').readFileSync("./input.txt").toString().trim();
const N = parseInt(input);
let output='';

for(i=N;i>0;i--){
  output+=i+'\n';
}

console.log(output);