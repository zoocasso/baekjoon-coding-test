const input = require('fs').readFileSync("./input.txt").toString().trim().split('\n');
const N = input.shift();
const physicalArr = input.map(num => num.split(' ').map(num => parseInt(num)));

const rank = [];

for(i=0;i<N;i++){
  let counter = 1;
  for(j=0;j<N;j++){
    if(i!=j){
      if(physicalArr[i][0]<physicalArr[j][0] && 
      physicalArr[i][1]<physicalArr[j][1]){
        counter++
      }
    }
  }
  rank.push(counter);
}

console.log(rank.join(' '));