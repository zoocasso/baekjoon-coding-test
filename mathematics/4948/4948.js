const input = require('fs').readFileSync('./input.txt').toString().split('\n').map(x=>parseInt(x));

const isPrimeNumber = [];

function calculator(M,N){
  
  for(let i=0; i<=N; i++){
    isPrimeNumber.push(true);
  }

  isPrimeNumber[0] = isPrimeNumber[1] = false;

  for (let i=2; i<=Math.ceil(Math.sqrt(N)); i++) {
    if(isPrimeNumber[i]) {
      let m = 2;
      while(i*m<=N) { 
        isPrimeNumber[i*m] = false;
        m++;
      }
    }
  }

  const results = [];

  for(let i=M+1; i<=N; i++) {
    if(isPrimeNumber[i]) { 
    results.push(i);
    }
  }
  console.log(results.length);
}

function init(){
  for(let i=0;i<input.length;i++){
    const num = input[i];
    if(num == 0){
      break;
    }
    const M = num;
    const N = num*2;
    calculator(M,N);
  }
}

init();