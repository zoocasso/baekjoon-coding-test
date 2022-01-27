const fs = require('fs');
const input = fs.readFileSync("./input.txt").toString().trim();
const A = parseInt(input);

if(A>=90){
  console.log("A");
}else if(80<=A&&A<90){
  console.log("B");
}else if(70<=A&&A<80){
  console.log("C");
}else if(60<=A&&A<70){
  console.log("D");
}else{
  console.log("F");
}