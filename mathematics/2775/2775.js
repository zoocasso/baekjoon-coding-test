let input = require('fs').readFileSync('./input.txt').toString().split('\n');

const T = parseInt(input[0]);

// console.log(T);
function getResidents(k,n){
  const apartment = [];
  for(i=0;i<=k;i++){
    apartment.push([1]);
    for(j=1;j<n;j++){
      if(i==0){
        apartment[i].push(j+1);
      }else{
        apartment[i].push(apartment[i-1][j]+apartment[i][j-1]);
      }
    }
  }
  console.log(apartment[k][n-1]);
}

for(l=1;l<T+1;l++){
  const k = parseInt(input[2*l-1]);
  const n = parseInt(input[2*l]);
  getResidents(k,n);
}