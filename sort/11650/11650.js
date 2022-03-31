const input = require('fs').readFileSync('./input.txt').toString().trim().split("\n");
const N = parseInt(input.shift());
const inputArr = input.map(v=>v.split(' ').map(x=>+x));

const output = inputArr.sort(function(a,b){
  if(a[0]>b[0]){
    return 1;
  }else if(a[0]<b[0]){
    return -1;
  }else{
    return a[1]-b[1];
  }
});

console.log(output.map(v=>v.join(' ')).join('\n'))