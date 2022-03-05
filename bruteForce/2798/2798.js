const input = require('fs').readFileSync("./input.txt").toString().trim().split('\n');
const initialNumber = input[0].split(' ').map(x=>parseInt(x));
const testNumber = input[1].split(' ').map(x=>parseInt(x));
const N = initialNumber[0],
      M = initialNumber[1];
let output = 0;
const numberOfCase = [];
const outputArr = [];

function getNumberOfCase(N){
  for(i=0;i<N;i++){
    for(j=1;j<N;j++){
      for(k=2;k<N;k++){
        if(i>=j||i>=k||j>=k){
          continue;
        }else{
          numberOfCase.push(`${i},${j},${k}`); 
        }
      }
    }
  }
}

function isNotOverM([i,j,k]){
  output = testNumber[i]+testNumber[j]+testNumber[k];
  if(output>M){
    return 0;
  }else{
    outputArr.push(output);
  }
}

function biggestInArr(arr){
  let biggest = arr[0];
  for(i=0;i<arr.length-1;i++){
    if(biggest<arr[i+1]){
      biggest = arr[i+1];
    }
  }
  return biggest;
}

function init(){
  getNumberOfCase(N);

  for(i=0;i<numberOfCase.length;i++){
   isNotOverM(numberOfCase[i].split(',').map(x=>parseInt(x))); 
  }
  
  console.log(biggestInArr(outputArr));
}

init();