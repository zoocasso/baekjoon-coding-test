const input = require('fs').readFileSync('/dev/stdin').toString().split('\n').map(x=>parseInt(x));

let prime = [];
let a = 0;
let b = 0;

function makePrime() {
  for (let i = 2; i <= 10000; i++) {
    let isPrime = true;
    for (let j = 2; j <= Math.sqrt(i); j++) {
      if (i % j === 0) {
        isPrime = false;
        break;
      }
    }
    if (isPrime)
      prime.push(i);
  }
}

function sumfunc(arr,number){
  let diff = Infinity;
  for(let i=0;i<arr.length;i++){
    let sum = arr[i];
    for(let j=0;j<arr.length;j++){
      if(sum+arr[j]>number)break;
      if(sum+arr[j] == number){
        if(arr[i]<=arr[j]){
          if(arr[j]-arr[i]<diff){
            a = arr[i];
            b = arr[j];
          }
        }
      }
    }
  }
  console.log(a,b);
}


function init(){
  const T = input[0];
  makePrime();
  for(let i=1;i<=T;i++){
    const N = input[i];
    sumfunc(prime,N);
  }
}

init();