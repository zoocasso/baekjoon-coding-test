const fs = require('fs');
const input = fs.readFileSync("./input.txt").toString().trim().split("\n");
const A = parseInt(input[0]);
const B = parseInt(input[1]);

if(A>0&&B>0){
  console.log(1);
}else if(A<0&&B>0){
  console.log(2);
}else if(A<0&&B<0){
  console.log(3);
}else{
  console.log(4);
}