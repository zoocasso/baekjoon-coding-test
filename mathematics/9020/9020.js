const input = require('fs').readFileSync('./input.txt').toString().split('\n').map(x=>parseInt(x));

const isPrimeNumber = [];
let results = [];
let a = 0;
let b = 0;

function calculator(number){
  results = [];
  for(let i=0; i<=number; i++){
    isPrimeNumber.push(true);
  }

  isPrimeNumber[0] = isPrimeNumber[1] = false;

  for (let i=2; i<=Math.ceil(Math.sqrt(number)); i++) {
    if(isPrimeNumber[i]) {
      let m = 2;
      while(i*m<=number) { 
        isPrimeNumber[i*m] = false;
        m++;
      }
    }
  }

  for(let i=0; i<=number; i++) {
    if(isPrimeNumber[i]) { 
    results.push(i);
    }
  }
  return results;
}

function sumfunc(arr,number){
  let diff = Infinity;
  for(let i=0;i<arr.length;i++){
    let sum = arr[i];
    for(let j=0;j<arr.length;j++){
      if(sum+arr[j] == number){
        if(sum<=arr[j]){
          if(arr[j]-arr[i]<diff){
            diff = arr[j]-arr[i];
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
  for(let i=1;i<=T;i++){
    const N = input[i];
    calculator(N);
    sumfunc(results,N);
  }
}

init();