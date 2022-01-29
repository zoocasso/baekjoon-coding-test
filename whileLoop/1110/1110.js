const input = require('fs').readFileSync("./input.txt").toString().trim();
let N =parseInt(input);

let sum;
let i=0;

while(true){
 sum = parseInt(N/10)+N%10;
 N = N%10*10 + sum %10;
 i++
  if(N==input){
    break;
  }
}
console.log(i);