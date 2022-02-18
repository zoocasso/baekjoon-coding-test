const input = require('fs').readFileSync("./input.txt").toString().trim().split('\n');

const array = [];
for(i=0;i<input.length;i++){
  array.push(parseInt(input[i]));
};
let max = 0;
let order = 0;
for(i=0;i<array.length;i++){
  if(max <= array[i]){
    max = array[i];
    order = i+1;
  }
}
console.log(max+'\n'+order);