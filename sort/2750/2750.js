const input = require('fs').readFileSync('./input.txt').toString().split('\n').map(x=>parseInt(x));
const N = input.shift();

function whatIsSmallest(arr){
  let smallest = 1000;
  for(i=0;i<N;i++){
    if(smallest > arr[i]){
      smallest = arr[i];
    }
  }
  for(j=0;j<N;j++){
    if(arr[j]==smallest){
      arr.splice(j,1);
    }
  }
  console.log(smallest);
}

for(k=0;k<N;k++){
  whatIsSmallest(input);
}