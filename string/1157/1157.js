const input = require('fs').readFileSync('./input.txt').toString().trim().split('');
const arr = [];
const newArr = [];
let max = 0;
let output = '';
let outputList = '';

for(i=0;i<input.length;i++){
  if(input[i].charCodeAt(0)>96){
    arr.push(input[i].charCodeAt(0)-32-65);
  }else{
    arr.push(input[i].charCodeAt(0)-65);
  }
}

for(j=0;j<26;j++){
  newArr.push(0);
}

for(k=0;k<input.length;k++){
  newArr.splice(arr[k],1,newArr[arr[k]]+1);
}

for(l=0;l<26;l++){
  if(max<newArr[l]){
    max = newArr[l];
  }
}

for(m=0;m<26;m++){
  if(newArr[m] == max){
    output += String.fromCharCode(m+65);
  } 
}

if(output.split('').length==1){
  console.log(output);
}else{
  console.log('?');
}