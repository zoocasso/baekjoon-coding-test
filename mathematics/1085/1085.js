const input = require('fs').readFileSync('./input.txt').toString().split(' ').map(x=>parseInt(x));

const x = input[0],
      y = input[1],
      w = input[2],
      h = input[3];

let diffX=w-x;
let diffY=h-y;

if(diffX>w/2){
  diffX = w - diffX;
}
if(diffY>h/2){
  diffY = h - diffY;
}

if(diffX<diffY){
  console.log(diffX);
}else{
  console.log(diffY);
}