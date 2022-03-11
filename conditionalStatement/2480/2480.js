const input = require('fs').readFileSync("./input.txt").toString().trim().split(" ").map(x=>parseInt(x));

const x = input[0],
      y = input[1],
      z = input[2];

if(x==y && x==z && y==z){
  console.log(10000+x*1000);
}else if(x==y){
  console.log(1000+x*100);
}else if(x==z){
  console.log(1000+x*100);
}else if(y==z){
  console.log(1000+y*100);
}else{
  let max = 0;
  if(max<x){
    max = x
  }
  if(max<y){
    max = y
  }
  if(max<z){
    max = z
  }
  console.log(max*100)
}