const input = require('fs').readFileSync('./input.txt').toString().split('\n');

const M = parseInt(input[0]);
const N = parseInt(input[1]);

let output = [];
let sum = 0;
let min = 10000;

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

for(i=M;i<=N;i++){
  if(primeNumber(i) == true){
    output.push(i);
  }
}
if(output.length==0){
  console.log(-1);
}else{
  for(j=0;j<output.length;j++){
    sum += output[j];
  }
  console.log(sum);

  for(k=0;k<output.length;k++){
    if(min>output[k]){
      min = output[k];
    }
  }
  console.log(min);
}