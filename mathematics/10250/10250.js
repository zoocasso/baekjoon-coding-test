let input = require('fs').readFileSync('./input.txt').toString().split('\n');

const T = parseInt(input[0]);
let output = ``;

function assignRoom(H,W,N){
  let height = N%H;
  if(height == 0){
    output += H;
  }else{
    output += height;
  }
  let roomNumber = Math.ceil(N/H);
  if(roomNumber<10){
    output += `0${roomNumber}`;
  }else{
    output += roomNumber;
  }
  console.log(output);
  output = ``;
}

for(i=1;i<T+1;i++){
  const testData = input[i].split(' ').map(x=>parseInt(x));
  const H = testData[0];
  const W = testData[1];
  const N = testData[2];
  assignRoom(H,W,N);
}