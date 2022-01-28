const fs = require('fs');
const input = fs.readFileSync("./input.txt").toString().trim().split("\n");
const firstNumber = parseInt(input[0]);
const inputArr = [];
for(i=0;i<firstNumber;i++){
  const arr = input[i+1].split(" ");
  const newArr = [];
  for(j=0;j<arr.length;j++){
    newArr.push(parseInt(arr[j]));
  }
  inputArr.push(newArr);
}
for(i=0;i<firstNumber;i++){
  console.log(inputArr[i][0]+inputArr[i][1]);
}