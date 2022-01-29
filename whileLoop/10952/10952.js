const input = require('fs').readFileSync("./input.txt").toString().trim().split('\n');

let i = 0;

while(+input[i].split(' ')[0]!=0||+input[i].split(' ')[1]!=0){
  console.log(parseInt(input[i].split(' ')[0]) + parseInt(input[i].split(' ')[1]));
  i++;
}