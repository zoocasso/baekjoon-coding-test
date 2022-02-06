const input = require('fs').readFileSync('./input.txt').toString().trim().split('\n');

const T = parseInt(input[0]);
const arr = [];
let P = '';
for(i=1;i<T+1;i++){
  arr.push(input[i].split(' '));
  const R = parseInt(arr[i-1][0]);
  const S = arr[i-1][1].split('');
  for(j=0;j<S.length;j++){
    for(k=0;k<R;k++){
      P += `${S[j]}`
    }
  }
  P += '\n';
}

console.log(P);