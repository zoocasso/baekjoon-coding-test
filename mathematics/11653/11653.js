const input = require('fs').readFileSync('./input.txt').toString();

let N = parseInt(input);
const primeNumber = [];

function divide(number){
  if(N%number == 0){
    console.log(number);
    N = N/number;
    divide(number);
  }
}

function init() {
  for(j=2;j<=N;j++){
    divide(j);
  }
}

init();