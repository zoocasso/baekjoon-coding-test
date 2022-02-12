const input = require('fs').readFileSync('./input.txt').toString();

const N = parseInt(input);
let output = 0;
let quotientFive = Math.floor(N/5);
let keyNumber = 0;
function canBeDevide(quotientFive){
  for(i=quotientFive;i>=0;i--){
    let isTrue = (N-5*i)%3;
    if((isTrue)%3 == 0){
      keyNumber = i;
      return true;
    }
  }
  return false;
}

if(N%15 == 0){
  console.log(N/5);
}else if(canBeDevide(quotientFive)){
  output += keyNumber;
  output += (N-5*keyNumber)/3;
  console.log(output);
}else{
  console.log(-1);
}