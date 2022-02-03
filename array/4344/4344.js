const input = require('fs').readFileSync("dev/stdin").toString().trim().split('\n');
const C = input[0];
let data = [];

for(i=0;i<C;i++){
  const arr = input[i+1].split(' ');
  const N = arr[0];
  let newArr = [];
  for(j=0;j<N;j++){
    newArr.push(parseInt(arr[j+1]));
  }
  const list = {
    'N' : N,
    'arr' : newArr
  };
  data.push(list);
}

for(i=0;i<C;i++){
  let sum = 0;
  let average = 0;
  for(j=0;j<data[i].N;j++){
    sum += data[i].arr[j];
  }
  average = sum/data[i].N
  let output = 0;
  for(k=0;k<data[i].N;k++){
    if(average < data[i].arr[k]){
      output += 100/data[i].N;
    }
  }
  console.log(`${output.toFixed(3)}%`);
}