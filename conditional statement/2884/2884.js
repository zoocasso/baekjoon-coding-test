const fs = require('fs');
const input = fs.readFileSync("./input.txt").toString().trim().split(" ");
const H = parseInt(input[0]);
const M = parseInt(input[1]);

if(M>=45){
  console.log(H, M-45);
}else if(M<45){
  if(H==0){
    console.log(23, M+15);
  }else{
    console.log(H-1, M+15);
  }
}