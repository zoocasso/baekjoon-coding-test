const input = require('fs').readFileSync("./input.txt").toString().trim().split('\n');
const firstLine = input[0].split(' ');
const N = parseInt(firstLine[0]);
const X = parseInt(firstLine[1]);
const arrA = input[1].split(' ');
let output = '';

for(i=0;i<N;i++){
  if(parseInt(arrA[i])<X){
    output += `${arrA[i]} `;
  }
}

console.log(output);