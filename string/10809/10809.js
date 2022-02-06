const S = require('fs').readFileSync('./input.txt').toString().trim();

const outputList = [];
let output = '';

for(i=0;i<26;i++){
  outputList.push(-1);
}

const arr = S.split('');

for(j=0;j<arr.length;j++){
  if(outputList[arr[j].charCodeAt(0)-97] == -1){
    outputList.splice(arr[j].charCodeAt(0)-97, 1, parseInt(j));
  }
}

for(k=0;k<outputList.length;k++){
  output += `${outputList[k]} `;
}

console.log(output);