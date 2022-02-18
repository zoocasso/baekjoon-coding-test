const input = require('fs').readFileSync("./input.txt").toString().trim().split('\n');
const N = parseInt(input[0]);
const array = input[1].split(' ');
const newArray = [];
for(i=0;i<array.length;i++){
  newArray.push(parseInt(array[i]));
}
let min = 1000000;
let max = -1000000;
for(i=0;i<array.length;i++){
  if(min>=newArray[i]){
    min = newArray[i]
  }
}
for(i=0;i<array.length;i++){
  if(max<=newArray[i]){
    max = newArray[i]
  }
}
console.log(min, max);