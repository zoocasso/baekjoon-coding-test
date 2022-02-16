const input = require('fs').readFileSync('./input.txt').toString().split(' ');

const A = BigInt(input[0]);
const B = BigInt(input[1]);
console.log((A+B).toString());
let bigger = 0;
let plus = 0;
let array =[];
let output = ``;
if(A.length>=B.length){
  bigger = A.length
}else{
  bigger = B.length
}

for(i=1;i<bigger+1;i++){
  let numberA = A[A.length-i]
  let numberB = B[B.length-i]
  let sum = numberA+numberB+plus;
  if(numberA==undefined){
    if(numberB+plus >=10){
      array.push(numberB+plus-10);
      plus = 1;
    }else{
      array.push(numberB+plus);
      plus = 0;
    }
  }else if(numberB==undefined){
    if(numberA+plus >=10){
      array.push(numberA+plus-10);
      plus = 1;
    }else{
      array.push(numberA+plus);
      plus = 0;
    }
  }else{
    if(sum >= 10){
      array.push(sum-10);
      plus = 1;
    }else{
      array.push(sum);
      plus = 0;
    }
  }
  if(i==bigger){
    if(numberA + numberB >=10){
      array.push(1);
    }
  }
}

array = array.reverse();

for(j=0;j<array.length;j++){
  output += array[j];
}

console.log(output.toString());