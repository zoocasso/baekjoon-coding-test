const input = require('fs').readFileSync("./input.txt").toString().trim().split("\n");

const firstNumber = parseInt(input[0]);

const inputArr = [];

let output = '';

for(i=0;i<firstNumber;i++){
  const arr = input[i+1].split(" ");
  sum = parseInt(arr[0])+parseInt(arr[1]);
  output += sum + "\n";
}

console.log(output);
