const input = require('fs').readFileSync("./input.txt").toString().trim().split('\n');
const remainder = [];
for(i=0;i<10;i++){
  remainder.push(parseInt(input[i]%42));
}

arr = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];

for(i=0;i<remainder.length;i++){
  for(j=0;j<42;j++){
    if(remainder[i] == j){
      arr[j] = arr[j] + 1;
    }
  }
}

output = 0;
for(i=0;i<42;i++){
  if(arr[i]!=0){
    output = output + 1;
  }
}

console.log(output);