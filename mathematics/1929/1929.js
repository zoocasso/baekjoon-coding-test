const input = require('fs').readFileSync('./input.txt').toString().split(' ').map(x=>parseInt(x));

const M = input[0];
const N = input[1];
let arr = [];

for(let i=M; i<=N; i++){
  arr.push(i);
}

for (let i=2; i<=Math.ceil(Math.sqrt(N)); i++) {
  let m = 2;
  while(i*m<=N) { 
    let location = arr.indexOf(i*m);
    if(location>-1){
      arr.splice(location,1);
    }
    m++;
  }
}

for(let i=0; i<arr.length; i++){
  console.log(arr[i]);
}