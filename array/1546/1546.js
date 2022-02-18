const input = require('fs').readFileSync("./input.txt").toString().trim().split('\n');
const M = input[0];
const arr = input[1].split(' ').map(i=>+i);
let sum = 0;
let max = 0;
for(i=0;i<M;i++){
  sum += arr[i];
}
for(i=0;i<M;i++){
  if(max<=arr[i]){
    max = arr[i];
  }
}
let output = (sum/max)*100/M;
console.log(output);