const input = require('fs').readFileSync('./input.txt').toString();
let bridge = parseInt(input)-1;

let times = 1;

while(bridge>0){
  bridge -= 6 * times;
  times ++;
}

console.log(times);