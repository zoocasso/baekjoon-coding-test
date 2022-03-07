const input = require('fs').readFileSync("./input.txt").toString().trim();

function decompose(number){
  let str = number.toString();
  let decomposeNumber = str.split('');
  let decomposeSum = 0;
  decomposeSum += parseInt(str);
  for(i=0;i<decomposeNumber.length;i++){
    decomposeSum += parseInt(decomposeNumber[i]);
  }
  return decomposeSum;
}

for(j=1;j<=input;j++){
  if(decompose(j)==parseInt(input)){
    console.log(j);
    break;
  }
  if(j == input){
    console.log(0);
  }
}