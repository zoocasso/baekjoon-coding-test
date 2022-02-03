const input = require('fs').readFileSync("/dev/stdin").toString().trim().split('\n');
const N = input[0];

let arr=[];
let newArr=[];
for(i=0;i<N;i++){
  arr.push(input[i+1]);
  newArr=arr[i].split('X');
  let value = 0;
  let sum = 0;
  for(j=0;j<newArr.length;j++){
    value = newArr[j].length;
    for(k=0;k<value;k++){
      sum += k+1
    }
  }
  console.log(sum);
}
