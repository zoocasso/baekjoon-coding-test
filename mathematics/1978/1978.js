const input = require('fs').readFileSync('./input.txt').toString().split('\n');

const N = input[0];
const arr = input[1].split(' ');
let output = 0;

function primeNumber(number){
  if(number==1){
    return false;
  }else if(number==2){
    return true;
  }else{
    for(j=2;j<number;j++){
      if(Number.isInteger(number/j)){
        return false;
      }
    }
    return true;
  }
}

for(i=0;i<N;i++){
  if(primeNumber(arr[i]) == true){
    output += 1;
  }
}
console.log(output);