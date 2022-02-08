const input = require('fs').readFileSync('./input.txt').toString().trim().split(' ');

const A = input[0];
const B = input[1];

let newA = '';
let newB = '';

for(i=2;i>=0;i--){
  newA += A[i];
  newB += B[i];
}

if(newA>newB){
  console.log(newA);
}else{
  console.log(newB);
}