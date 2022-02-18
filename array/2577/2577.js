const input = require('fs').readFileSync("./input.txt").toString().trim().split('\n');

const A = input[0];
const B = input[1];
const C = input[2];
let arr = [0,0,0,0,0,0,0,0,0,0];
const product = A*B*C;
const productToString = product.toString().split('');
for(i=0;i<productToString.length;i++){
  for(j=0;j<10;j++){
    if(productToString[i] == j){
      arr[j] = arr[j] + 1;
    }
  }
}
for(i=0;i<10;i++){
  console.log(arr[i]);
}