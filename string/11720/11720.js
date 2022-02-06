const input = require('fs').readFileSync('./input.txt').toString().trim().split('\n');

const N = input[0];
const arr = input[1].split('');
let output = 0;

for(i=0;i<N;i++){
  output = output + parseInt(arr[i]);
}

console.log(output);