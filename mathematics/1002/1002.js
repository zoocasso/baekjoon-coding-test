const input = require('fs').readFileSync("./input.txt").toString().trim().split("\n");
const T = parseInt(input.shift());

function position(testCase){
  const x1 = testCase[0],
      y1 = testCase[1],
      r1 = testCase[2],
      x2 = testCase[3],
      y2 = testCase[4],
      r2 = testCase[5];
  const distance = Math.sqrt(Math.pow((x1-x2),2)+Math.pow((y1-y2),2));
  if(x1 == x2 && y1 ==y2){
    if(r1 == r2){
      console.log(-1);
    }else{
      console.log(0);
    }
  }else if(distance == r1+r2){
    console.log(1);
  }else if(distance + r1 == r2 || distance + r2 == r1){
    console.log(1);
  }else if(distance + r1 < r2 || distance + r2 < r1){
    console.log(0);    
  }else if(distance < r1+r2){
    console.log(2);
  }else{
    console.log(0);
  }
  
}

for(i=0; i<T; i++){
  let testCase = input[i].split(" ").map(x=>parseInt(x));
  position(testCase);
}