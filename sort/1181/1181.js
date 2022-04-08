const input = require('fs').readFileSync('./input.txt').toString().trim().split("\n");
const N = parseInt(input.shift());

const output = input.sort((a,b)=>{
  if(a.length>b.length){
    return 1;
  }else if(a.length<b.length){
    return -1;
  }else if(a.length == b.length){
    if(a<b){
      return -1;
    }else{
      return 1;
    }
  }
});

const setOutput = new Set();

for(i=0;i<output.length;i++){
  setOutput.add(output[i]);
}

var arrOutput = Array.from(setOutput)

console.log(arrOutput.join('\n'));