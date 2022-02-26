const input = require('fs').readFileSync('./input.txt').toString();
let output = 1;

function factorial(number){
  if(number>=1){
    output *= number;
  }else{
    return output;
  }
  factorial(number-1);
}

factorial(input);
console.log(output);