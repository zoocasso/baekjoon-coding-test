const input = require('fs').readFileSync('./input.txt').toString().split(' ').map(x=>parseInt(x));

const A = input[0];
const B = input[1];
const C = input[2];

if(C<=B){
  console.log(-1);
}else{
  console.log(Math.floor(A/(C-B))+1);
}